import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import HomePage from "./HomePage";

describe("Given the HomePage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home' inside a heading", () => {
      render(<HomePage />);

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
