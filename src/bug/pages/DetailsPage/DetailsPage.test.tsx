import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import DetailsPage from "./DetailsPage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the DetailsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Details' heading", () => {
      render(<DetailsPage />, { wrapper: AllContextsProvider });

      const pageTitle = page.getByRole("heading", { name: /details/i });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Back' link", () => {
      render(<DetailsPage />, { wrapper: AllContextsProvider });

      const backLink = page.getByRole("link", { name: /back/i });

      expect(backLink).toBeInTheDocument();
    });
  });
});
