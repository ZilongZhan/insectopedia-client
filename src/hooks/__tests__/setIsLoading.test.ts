import { renderHook } from "vitest-browser-react";
import useApp from "../useApp";
import AllContextsProvider from "../../test-utils/AllContextsProvider";

describe("Given the setIsLoading function", () => {
  describe("When it receives true", () => {
    test("Then it should be loading", async () => {
      const { result } = renderHook(() => useApp(), {
        wrapper: AllContextsProvider,
      });

      await result.current.setIsLoading(true);

      const isLoading = result.current.isLoading;

      expect(isLoading).toBe(true);
    });
  });

  describe("When it receives false", () => {
    test("Then it should not be loading", async () => {
      const { result } = renderHook(() => useApp(), {
        wrapper: AllContextsProvider,
      });

      await result.current.setIsLoading(false);

      const isLoading = result.current.isLoading;

      expect(isLoading).toBe(false);
    });
  });
});
