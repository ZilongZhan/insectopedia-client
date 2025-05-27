import { renderHook } from "vitest-browser-react";
import useApp from "../useApp";
import AllContextsProvider from "../../testUtils/AllContextsProvider";
import type { ModalConfig } from "../../slice/types";

describe("Given the setModalConfig function", () => {
  describe("When it receives false show modal, 'Hello World' message, and false is error modal", () => {
    const modalMessage = "Hello World";

    const modalConfig: ModalConfig = {
      showModal: false,
      message: modalMessage,
      isErrorModal: false,
    };

    test("Then it should be showing modal", async () => {
      const { result } = renderHook(() => useApp(), {
        wrapper: AllContextsProvider,
      });

      await result.current.setModalConfig(modalConfig);

      const config = result.current.modalConfig;

      expect(config.showModal).toBe(false);
    });

    test("Then the modal message should be 'Hello World'", async () => {
      const { result } = renderHook(() => useApp(), {
        wrapper: AllContextsProvider,
      });

      await result.current.setModalConfig(modalConfig);

      const config = result.current.modalConfig;

      expect(config.message).toBe(modalMessage);
    });

    test("Then the modal should not be an error modal", async () => {
      const { result } = renderHook(() => useApp(), {
        wrapper: AllContextsProvider,
      });

      await result.current.setModalConfig(modalConfig);

      const config = result.current.modalConfig;

      expect(config.isErrorModal).toBe(false);
    });
  });
});
