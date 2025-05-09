import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import Layout from "./Layout";
import { MemoryRouter } from "react-router";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Insectopedia inside a level 1 heading", () => {
      const expectedTitle = /insectopedia/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = page.getByRole("heading", { name: expectedTitle });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Home' link", () => {
      render(<Layout />, { wrapper: MemoryRouter });

      const homeLink = page.getByRole("link", { name: /home/i });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
