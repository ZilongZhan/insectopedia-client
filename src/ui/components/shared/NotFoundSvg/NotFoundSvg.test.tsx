import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import NotFoundSvg from "./NotFoundSvg";

describe("Given the NotFoundSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show silhouette of a mosquito next to the number 404", () => {
      render(<NotFoundSvg />);

      const svgElement = page.getByRole("img", {
        name: /silhouette of a mosquito next to the number 404/i,
      });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
