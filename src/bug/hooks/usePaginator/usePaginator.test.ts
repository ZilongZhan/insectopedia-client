import { renderHook } from "vitest-browser-react";
import usePaginator from "./usePaginator";

describe("Given the doesPageExist function", () => {
  describe("When there is 1 page", () => {
    const pagesTotal = 1;

    describe("And it receives page number 1", () => {
      test("Then the page should exist", () => {
        const pageNumber = 1;

        const { result } = renderHook(() => usePaginator(pagesTotal));

        const pageExists = result.current.doesPageExist(pageNumber);

        expect(pageExists).toBe(true);
      });
    });

    describe("And it receives page numer 2", () => {
      test("Then the page should not exist", () => {
        const pageNumber = 2;

        const { result } = renderHook(() => usePaginator(pagesTotal));

        const pageExists = result.current.doesPageExist(pageNumber);

        expect(pageExists).toBe(false);
      });
    });
  });
});
