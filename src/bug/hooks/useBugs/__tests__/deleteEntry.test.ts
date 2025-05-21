import { renderHook } from "vitest-browser-react";
import useBugs from "../useBugs";
import { insect1, insect2 } from "../../../fixtures";
import AllContextsProvider from "../../../../test-utils/AllContextsProvider";

describe("Given the deleteEntry function", () => {
  describe("When it receives Insect One's ID", () => {
    test("Then it should remove Insect One from bugs collection", async () => {
      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.deleteEntry(insect1.id);

      const bugs = result.current.bugsInfo.bugs;

      expect(bugs).not.toContain(
        expect.objectContaining({ name: insect1.name }),
      );
    });
  });

  describe("When it receives Insect Two's ID which doesn't exist", () => {
    test("Then it should throw error 'Error deleting bug'", async () => {
      const expectedErrorMessage = "Error deleting bug";

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const deleteInsectTwo = async (): Promise<void> => {
        await result.current.deleteEntry(insect2.id);
      };

      await expect(deleteInsectTwo).rejects.toThrow(expectedErrorMessage);
    });
  });
});
