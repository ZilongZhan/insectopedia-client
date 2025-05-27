import { render } from "vitest-browser-react";
import Modal from "./Modal";
import { page } from "@vitest/browser/context";
import AllContextsProvider from "../../../testUtils/AllContextsProvider";

describe("Given the Modal component", () => {
  describe("When it receives 'Hello World'", () => {
    test("Then it should show 'Hello World'", () => {
      const expectedMessage = /hello world/i;

      render(<Modal message="Hello World" />, { wrapper: AllContextsProvider });

      const modalMessage = page.getByText(expectedMessage);

      expect(modalMessage).toBeInTheDocument();
    });

    test("Then it should show a close modal button", () => {
      render(<Modal message="Hello World" />, { wrapper: AllContextsProvider });

      const closeModalButton = page.getByLabelText(/close modal/i);

      expect(closeModalButton).toBeInTheDocument();
    });
  });

  describe("When it receives 'Error' and true is error modal", () => {
    test("Then it should show 'Error' and an error icon", () => {
      render(<Modal message="Hello World" isErrorModal={true} />, {
        wrapper: AllContextsProvider,
      });

      const modalMessage = page.getByText(/error/i);
      const errorIcon = page.getByRole("img", { name: /error icon/i });

      expect(modalMessage).toBeInTheDocument();
      expect(errorIcon).toBeInTheDocument();
    });
  });
});
