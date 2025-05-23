import { insect1, insect2 } from "../../fixtures";
import BugsClient from "../BugsClient";

describe("Given the deleteBugById method of BugsClient", () => {
  const bugsClient = new BugsClient();

  describe("When it receives Insect One's ID", () => {
    test("Then it should return Insect One", async () => {
      const bug = await bugsClient.deleteBugById(insect1.id);

      expect(bug).toStrictEqual(insect1);
    });
  });

  describe("When it receives Insect Two's ID which doesn't exist", () => {
    test("Then it should throw error 'Failed to delete bug'", async () => {
      const expectedErrorMessage = "Failed to delete bug";

      const deleteInsectTwo = async (): Promise<void> => {
        await bugsClient.deleteBugById(insect2.id);
      };

      await expect(deleteInsectTwo).rejects.toThrow(expectedErrorMessage);
    });
  });
});
