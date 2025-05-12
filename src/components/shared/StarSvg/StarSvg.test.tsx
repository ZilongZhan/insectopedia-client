import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import StarSvg from "./StarSvg";

describe("Given the StarSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show icon of a 5 pointed star", () => {
      render(<StarSvg />);

      const svgElement = page.getByRole("img", {
        name: /icon of a 5 pointed star/i,
      });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
