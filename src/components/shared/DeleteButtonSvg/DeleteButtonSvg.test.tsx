import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import DeleteButtonSvg from "./DeleteButtonSvg";

describe("Given the DeleteButtonSvg component", () => {
  describe("When it renders", () => {
    test("Then it should show a delete item icon", () => {
      render(<DeleteButtonSvg />);

      const deleteItemIcon = page.getByRole("img", {
        name: /delete item icon/i,
      });

      expect(deleteItemIcon).toBeInTheDocument();
    });
  });
});
