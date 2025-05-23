import {
  insect1,
  insect1FormData,
  insect2FormData,
  insect3FormData,
} from "../../fixtures";
import type { BugFormData } from "../../types";
import BugsClient from "../BugsClient";

describe("Given the addBug method of BugsClient", () => {
  describe("When it receives Insect One form data", () => {
    test("Then it should respond with Insect One", async () => {
      const bugsClient = new BugsClient();

      const bug = await bugsClient.addBug(insect1FormData);

      expect(bug).toStrictEqual(insect1);
    });
  });

  describe("When it receives Insect Two form data which already exists", () => {
    test("Then it should throw error 'Failed to add new bug'", async () => {
      const expectedErrorMessage = "Failed to add new bug";

      const bugsClient = new BugsClient();

      const addInsectTwo = async (): Promise<void> => {
        await bugsClient.addBug(insect2FormData);
      };

      await expect(addInsectTwo).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives Insect Three form data with invalid name 'A'", () => {
    test("Then it should throw error 'Failed to add new bug'", async () => {
      const expectedErrorMessage = "Failed to add new bug";
      const invalidName = "A";

      const insect3FormDataWithInvalidName: BugFormData = {
        ...insect3FormData,
        name: invalidName,
      };

      const bugsClient = new BugsClient();

      const addInsectThree = async (): Promise<void> => {
        await bugsClient.addBug(insect3FormDataWithInvalidName);
      };

      await expect(addInsectThree).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives Insect Three with empty name", () => {
    test("Then it should throw error 'Input field 'name' cannot have empty value'", async () => {
      const expectedErrorMessage = "Input field 'name' cannot have empty value";
      const emptyName = "";

      const insectThreeWithEmptyName: BugFormData = {
        ...insect3FormData,
        name: emptyName,
      };

      const bugsClient = new BugsClient();

      const addInsectFour = async (): Promise<void> => {
        await bugsClient.addBug(insectThreeWithEmptyName);
      };

      await expect(addInsectFour).rejects.toThrow(expectedErrorMessage);
    });
  });
});
