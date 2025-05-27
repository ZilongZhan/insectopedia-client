import { render } from "vitest-browser-react";
import ErrorSvg from "./ErrorSvg";
import { page } from "@vitest/browser/context";

describe("Given the ErrorSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show an error icon", () => {
      render(<ErrorSvg />);

      const svgElement = page.getByRole("img", { name: /error icon/i });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
