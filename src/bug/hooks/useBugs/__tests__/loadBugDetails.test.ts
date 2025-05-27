import { renderHook } from "vitest-browser-react";
import useBugs from "../useBugs";
import { insect1 } from "../../../fixtures";
import AllContextsProvider from "../../../../testUtils/AllContextsProvider";

describe("Given the loadBugDetails function", () => {
  describe("When it receives Insect One's ID", () => {
    test("Then it should return Insect One", async () => {
      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const bug = await result.current.loadBugDetails(insect1.id);

      expect(bug).toStrictEqual(insect1);
    });
  });
});
