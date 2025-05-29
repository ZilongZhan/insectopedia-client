import { renderHook } from "vitest-browser-react";
import useBugs from "../useBugs";
import AllContextsProvider from "../../../../testUtils/AllContextsProvider";
import { insect1, insect1FormData } from "../../../fixtures";
import type { Bug, BugFormData } from "../../../types";

describe("Given the updateReport function", () => {
  describe("When it receives Insect One's ID and modified data", () => {
    test("Then it should update Insect One", async () => {
      const modifiedName = "Insecto Uno";

      const modifiedInsect1FormData: BugFormData = {
        ...insect1FormData,
        name: modifiedName,
      };
      const modifiedInsectOne: Bug = {
        ...insect1,
        name: modifiedName,
        imageAlt: `Portrait of the ${modifiedName} (Insecta oneus) in its natural glory.`,
      };

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.loadBugsInfo(1);

      await result.current.updateReport(insect1.id, modifiedInsect1FormData);

      const bugs = result.current.bugsInfo.bugs;

      expect(bugs).toEqual(
        expect.arrayContaining([expect.objectContaining(modifiedInsectOne)]),
      );
    });
  });
});
