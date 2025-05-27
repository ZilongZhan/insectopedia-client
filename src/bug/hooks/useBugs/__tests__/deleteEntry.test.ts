import { renderHook } from "vitest-browser-react";
import useBugs from "../useBugs";
import { insect1 } from "../../../fixtures";
import AllContextsProvider from "../../../../testUtils/AllContextsProvider";

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
});
