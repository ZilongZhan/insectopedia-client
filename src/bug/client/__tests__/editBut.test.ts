import {
  insect1,
  insect1FormData,
  insect2,
  insect2FormData,
} from "../../fixtures";
import type { Bug, BugFormData } from "../../types";
import BugsClient from "../BugsClient";

describe("Given the editBug method of BugsClient", () => {
  describe("When it receives Insect One's ID and modified data", () => {
    test("Then it should return modified Insect One", async () => {
      const modifiedName = "Insecto Uno";

      const modifiedInsect1FormData: BugFormData = {
        ...insect1FormData,
        name: modifiedName,
      };
      const modifiedInsect1: Bug = {
        ...insect1,
        name: modifiedName,
        imageAlt: `Portrait of the ${modifiedName} (Insecta oneus) in its natural glory.`,
      };

      const bugsClient = new BugsClient();

      const bug = await bugsClient.editBug(insect1.id, modifiedInsect1FormData);

      expect(bug).toStrictEqual(modifiedInsect1);
    });
  });

  describe("When it receives Insect Two's ID which doesn't exist", () => {
    test(`Then it should throw error 'Failed to edit bug'`, async () => {
      const modifiedName = "Insecto Dos";

      const modifiedInsect2FormData: BugFormData = {
        ...insect2FormData,
        name: modifiedName,
      };

      const bugsClient = new BugsClient();

      const editInsectTwo = async (): Promise<void> => {
        await bugsClient.editBug(insect2.id, modifiedInsect2FormData);
      };

      await expect(editInsectTwo).rejects.toThrow("Failed to edit bug");
    });
  });
});
