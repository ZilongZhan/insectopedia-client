import { render } from "vitest-browser-react";
import EditSvg from "./EditSvg";
import { page } from "@vitest/browser/context";

describe("Given the EditSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show edit element icon", () => {
      render(<EditSvg />);

      const svgElement = page.getByRole("img", { name: /edit item icon/i });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
