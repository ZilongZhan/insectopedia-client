import { renderHook } from "vitest-browser-react";
import { insectsCollection } from "../../../fixtures";
import AllContextsProvider from "../../../../test-utils/AllContextsProvider";
import useBugs from "../useBugs";
import type { Bug } from "../../../types";

describe("Given the renderBugsInfo function", () => {
  const bugsPerPage = 16;
  const expectedBugsTotal = insectsCollection.length;

  describe("When it receives 1", () => {
    test("Then it should set insect 1 to 16 as bugs and number 17 as total bugs", async () => {
      const pageNumber = 1;

      const expectedBugs = insectsCollection.slice(0, bugsPerPage);

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.renderBugsInfo(pageNumber);

      const bugs = result.current.bugsInfo.bugs;
      const bugsTotal = result.current.bugsInfo.bugsTotal;

      expect(bugs).toStrictEqual(expectedBugs);
      expect(bugsTotal).toBe(expectedBugsTotal);
    });
  });

  describe("When it receives 2", () => {
    test("Then it should set insect 17 as bugs and number 17 as total bugs", async () => {
      const pageNumber = 2;

      const secondPageInitialPosition = 16;

      const expectedBugs = insectsCollection.slice(
        secondPageInitialPosition,
        bugsPerPage,
      );

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.renderBugsInfo(pageNumber);

      const bugs = result.current.bugsInfo.bugs;
      const bugsTotal = result.current.bugsInfo.bugsTotal;

      expect(bugs).toStrictEqual(expectedBugs);
      expect(bugsTotal).toBe(expectedBugsTotal);
    });
  });

  describe("When it receives 99 invalid page number", () => {
    test("Then it should return no bugs and number 17 as total bugs", async () => {
      const expectedBugs: Bug[] = [];
      const pageNumber = 99;

      const { result } = renderHook(() => useBugs(), {
        wrapper: AllContextsProvider,
      });

      await result.current.renderBugsInfo(pageNumber);

      const bugs = result.current.bugsInfo.bugs;
      const bugsTotal = result.current.bugsInfo.bugsTotal;

      expect(bugs).toStrictEqual(expectedBugs);
      expect(bugsTotal).toBe(expectedBugsTotal);
    });
  });
});
