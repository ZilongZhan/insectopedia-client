import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router";
import { page } from "@vitest/browser/context";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home'", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const homeLink = page.getByRole("link", { name: /home/i });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
