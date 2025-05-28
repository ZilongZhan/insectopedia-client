import { renderHook } from "vitest-browser-react";
import useBugs from "../useBugs";
import AllContextsProvider from "../../../../testUtils/AllContextsProvider";
import { insect1 } from "../../../fixtures";
import type { Bug } from "../../../types";

describe("Given the toggleIsFavorite function", () => {
  describe("When it receives Insect One's ID which is not a favorite bug", () => {
    test("Then it should return Insect One which is a favorite bug", async () => {
      const toggledInsectOne: Bug = {
        ...insect1,
        isFavorite: true,
      };

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      const bug = await result.current.toggleIsFavorite(insect1.id);

      expect(bug).toStrictEqual(toggledInsectOne);
    });
  });
});
