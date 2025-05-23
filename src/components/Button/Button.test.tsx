import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives 'Hello World' and an action", () => {
    const buttonText = "Hello World";

    test("Then it should show a 'Hello World' button", () => {
      render(<Button>{buttonText}</Button>);

      const button = page.getByRole("button", { name: /hello world/i });

      expect(button).toBeInTheDocument();
    });

    describe("And the user clicks the 'Hello World' button", () => {
      test("Then the action should be called", async () => {
        const user = userEvent.setup();
        const action = vitest.fn();

        render(<Button action={action}>{buttonText}</Button>);

        const button = page.getByRole("button", { name: buttonText });

        await user.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
