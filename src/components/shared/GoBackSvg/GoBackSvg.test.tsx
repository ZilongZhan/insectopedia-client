import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import GoBackSvg from "./GoBackSvg";

describe("Given the GoBackSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show a go back icon", () => {
      render(<GoBackSvg />);

      const svgElement = page.getByRole("img", { name: /go back icon/i });

      expect(svgElement).toBeInTheDocument();
    });
  });
});
