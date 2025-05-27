import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Insectopedia' inside a level 1 heading", () => {
      const expectedTitle = /insectopedia/i;

      render(<Header />);

      const appTitle = page.getByRole("heading", { name: expectedTitle });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
