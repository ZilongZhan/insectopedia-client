import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import SnailSvg from "./SnailSvg";

describe("Given the SnailSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show silhouette of a snail", () => {
      render(<SnailSvg />);

      const svgElement = page.getByRole("img", {
        name: /silhouette of a snail/i,
      });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
