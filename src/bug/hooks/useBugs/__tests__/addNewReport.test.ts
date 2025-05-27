import { renderHook } from "vitest-browser-react";
import AllContextsProvider from "../../../../testUtils/AllContextsProvider";
import useBugs from "../useBugs";
import { insect1FormData } from "../../../fixtures";

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
});
