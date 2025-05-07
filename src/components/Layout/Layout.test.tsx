import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Insectopedia inside a level 1 heading", () => {
      const expectedTitle = /insectopedia/i;

      render(<Layout />);

      const appTitle = page.getByRole("heading", { name: expectedTitle });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
