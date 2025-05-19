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
    test("Then it should throw error 'Error adding new bug'", () => {
      const expectedErrorMessage = "Error adding new bug";

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const addInsect2 = async (): Promise<void> => {
        await result.current.addNewReport(insect2FormData);
      };

      expect(addInsect2).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives insect 3 form data with invalid name 'A'", () => {
    test("Then it should throw error 'Error adding new bug'", () => {
      const expectedErrorMessage = "Error adding new bug";
      const insect3FormDataWithInvalidName: BugFormData = {
        ...insect3FormData,
        name: "A",
      };

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const addInsect2 = async (): Promise<void> => {
        await result.current.addNewReport(insect3FormDataWithInvalidName);
      };

      expect(addInsect2).rejects.toThrow(expectedErrorMessage);
    });
  });
});
