import {
  insect1,
  insect1FormData,
  insect2FormData,
  insect3FormData,
} from "../../fixtures";
import type { BugFormData } from "../../types";
import BugsClient from "../BugsClient";

describe("Given the addBug method of BugsClient", () => {
  const bugsClient = new BugsClient();

  describe("When it receives insect 1 form data", () => {
    test("Then it should respond with insect 1", async () => {
      const bug = await bugsClient.addBug(insect1FormData);

      expect(bug).toStrictEqual(insect1);
    });
  });

  describe("When it receives insect 2 form data which already exists", () => {
    test("Then it should throw error 'Error adding new bug'", async () => {
      const expectedErrorMessage = "Error adding new bug";

      const addInsect2 = async (): Promise<void> => {
        await bugsClient.addBug(insect2FormData);
      };

      await expect(addInsect2).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives insect 3 form data with invalid name 'A'", () => {
    test("Then it should throw error 'Error adding new bug'", async () => {
      const expectedErrorMessage = "Error adding new bug";

      const insect3FormDataWithInvalidName: BugFormData = {
        ...insect3FormData,
        name: "A",
      };

      const addInsect3 = async (): Promise<void> => {
        await bugsClient.addBug(insect3FormDataWithInvalidName);
      };

      await expect(addInsect3).rejects.toThrow(expectedErrorMessage);
    });
  });
});
