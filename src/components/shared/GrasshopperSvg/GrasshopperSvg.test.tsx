import { render } from "vitest-browser-react";
import GrasshopperSvg from "./GrasshopperSvg";
import { page } from "@vitest/browser/context";

describe("Given the GrasshopperSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show silhouette of a grasshopper", () => {
      render(<GrasshopperSvg />);

      const svgElement = page.getByRole("img", {
        name: /silhouette of a grasshopper/i,
      });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
