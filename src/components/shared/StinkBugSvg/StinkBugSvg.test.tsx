import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import StinkBugSvg from "./StinkBugSvg";

describe("Given the StinkBugSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show silhouette of a stinkbug", () => {
      render(<StinkBugSvg />);

      const svgElement = page.getByRole("img", {
        name: /silhouette of a stinkbug/i,
      });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
