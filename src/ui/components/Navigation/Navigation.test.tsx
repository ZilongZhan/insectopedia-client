import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router";
import { page } from "@vitest/browser/context";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home' link", () => {
      const linkLabel = /home/i;

      render(<Navigation />, { wrapper: MemoryRouter });

      const homeLink = page.getByRole("link", { name: linkLabel });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show 'Report' link", () => {
      const linkLabel = /report/i;

      render(<Navigation />, { wrapper: MemoryRouter });

      const reportLink = page.getByRole("link", { name: linkLabel });

      expect(reportLink).toBeInTheDocument();
    });
  });
});
