import { renderHook } from "vitest-browser-react";
import AllContextsProvider from "../../../../test-utils/AllContextsProvider";
import useBugs from "../useBugs";
import {
  insect1FormData,
  insect2FormData,
  insect3FormData,
} from "../../../fixtures";
import type { BugFormData } from "../../../types";

describe("Given the addNewReport function", () => {
  describe("When it receives insect 1 form data", () => {
    test("Then it should add insect 1 to bugs collection", async () => {
      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.addNewReport(insect1FormData);

      const bugs = result.current.bugsInfo.bugs;

      expect(bugs).toContainEqual(
        expect.objectContaining({ name: insect1FormData.name }),
      );
    });
  });

  describe("When it receives insect 2 form data which already exists", async () => {
    test("Then it should throw error 'Failed to add new bug'", async () => {
      const expectedErrorMessage = "Failed to add new bug";

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const addInsect2 = async (): Promise<void> => {
        await result.current.addNewReport(insect2FormData);
      };

      await expect(addInsect2).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives insect 3 form data with invalid name 'A'", () => {
    test("Then it should throw error 'Failed to add new bug'", async () => {
      const expectedErrorMessage = "Failed to add new bug";
      const invalidName = "A";

      const insectThreeFormDataWithInvalidName: BugFormData = {
        ...insect3FormData,
        name: invalidName,
      };

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const addInsect2 = async (): Promise<void> => {
        await result.current.addNewReport(insectThreeFormDataWithInvalidName);
      };

      await expect(addInsect2).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives Insect Three form data with empty name", () => {
    test("Then it shoudl throw error 'Input field 'name' cannot have empty value'", async () => {
      const expectedErrorMessage = "Input field 'name' cannot have empty value";
      const emptyName = "";

      const insectThreeFormDataWithEmptyName: BugFormData = {
        ...insect3FormData,
        name: emptyName,
      };

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const addInsectThree = async (): Promise<void> => {
        await result.current.addNewReport(insectThreeFormDataWithEmptyName);
      };

      await expect(addInsectThree).rejects.toThrow(expectedErrorMessage);
    });
  });
});
