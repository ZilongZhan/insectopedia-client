import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import DangerSvg from "./DangerSvg";

describe("Given the DangerSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show a danger icon", () => {
      render(<DangerSvg />);

      const svgElement = page.getByRole("img", { name: /danger icon/i });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
