import { insect1, insect2 } from "../../fixtures";
import BugsClient from "../BugsClient";

describe("Given the getBugById method of BugsClient", () => {
  describe("When it receives Insect One's ID", () => {
    test("Then it should return Insect One", async () => {
      const bugsClient = new BugsClient();

      const bug = await bugsClient.getBugById(insect1.id);

      expect(bug).toStrictEqual(insect1);
    });
  });

  describe("When it receives Insect Two's ID which doesn't exist", () => {
    test("Then it should throw error 'Failed to fetch bug'", async () => {
      const expectedErrorMessage = "Failed to fetch bug";

      const bugsClient = new BugsClient();

      const getInsectTwo = async (): Promise<void> => {
        await bugsClient.getBugById(insect2.id);
      };

      await expect(getInsectTwo).rejects.toThrow(expectedErrorMessage);
    });
  });
});
