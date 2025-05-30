import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router";
import { page } from "@vitest/browser/context";
import { insectsCollection } from "../../fixtures";
import Paginator from "./Paginator";

describe("Given the Paginator component", () => {
  describe("When it receives page number 1 and 16 bugs with 17 total bugs", () => {
    const pageNumber = 1;

    const bugsTotal = insectsCollection.length;

    test("Then it should show 'Go to page 2' link", () => {
      const linkAriaLabel = /go to page 2/i;

      render(<Paginator pageNumber={pageNumber} bugsTotal={bugsTotal} />, {
        wrapper: MemoryRouter,
      });

      const nextPageLink = page.getByRole("link", { name: linkAriaLabel });

      expect(nextPageLink).toBeInTheDocument();
    });
  });

  describe("When it receives page number 2 and 1 bug with 17 total bugs", () => {
    const pageNumber = 2;

    const bugsTotal = insectsCollection.length;

    test("Then it should show 'Go to page 1' link", () => {
      const currentPageAriaLabel = /go to page 1/i;

      const linkAriaLabel = currentPageAriaLabel;

      render(<Paginator pageNumber={pageNumber} bugsTotal={bugsTotal} />, {
        wrapper: MemoryRouter,
      });

      const previousPageLink = page.getByRole("link", {
        name: linkAriaLabel,
      });

      expect(previousPageLink).toBeInTheDocument();
    });
  });
});
