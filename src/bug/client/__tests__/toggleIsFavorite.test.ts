import { insect1, insect2, insect3 } from "../../fixtures";
import type { Bug } from "../../types";
import BugsClient from "../BugsClient";

describe("Given the toggleIsFavorite method of BugsClient", () => {
  describe("When it receives Insect One's ID which is not a favorite bug", () => {
    test("Then it should return Insect One that is a favorite bug", async () => {
      const toggledInsectOne: Bug = {
        ...insect1,
        isFavorite: true,
      };

      const bugsClient = new BugsClient();

      const bug = await bugsClient.toggleIsFavorite(insect1.id);

      expect(bug).toStrictEqual(toggledInsectOne);
    });
  });

  describe("When it receives Insect Two's ID which is a favorite bug", () => {
    test("Then it should return Insect Two that is not a favorite bug", async () => {
      const toggledInsectTwo: Bug = {
        ...insect2,
        isFavorite: false,
      };

      const bugsClient = new BugsClient();

      const bug = await bugsClient.toggleIsFavorite(insect2.id);

      expect(bug).toStrictEqual(toggledInsectTwo);
    });
  });

  describe("When it receives Insect Three's ID which doesn't exist", () => {
    test("Then it should throw error 'Failed to patch bug'", async () => {
      const expectedErrorMessage = "Failed to patch bug";

      const bugsClient = new BugsClient();

      const toggleInsectThree = async (): Promise<void> => {
        await bugsClient.toggleIsFavorite(insect3.id);
      };

      await expect(toggleInsectThree).rejects.toThrow(expectedErrorMessage);
    });
  });
});
