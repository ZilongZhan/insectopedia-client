import { render } from "vitest-browser-react";
import { insectsCollection } from "../../fixtures";
import type { BugsInfo } from "../../types";
import Paginator from "./Paginator";
import { page } from "@vitest/browser/context";
import { MemoryRouter } from "react-router";

describe("Given the Paginator component", () => {
  describe("When it receives page number 1 and 16 bugs with 17 total bugs", () => {
    const pageNumber = 1;
    const bugsPerPage = 16;

    const bugsInfo: BugsInfo = {
      bugs: insectsCollection.slice(0, bugsPerPage),
      bugsTotal: insectsCollection.length,
    };

    test("Then it should show 'Go to page 2' link", () => {
      const linkAriaLabel = /go to page 2/i;

      render(<Paginator pageNumber={pageNumber} bugsInfo={bugsInfo} />, {
        wrapper: MemoryRouter,
      });

      const nextPageLink = page.getByRole("link", { name: linkAriaLabel });

      expect(nextPageLink).toBeInTheDocument();
    });

    test("Then the current page should be 1", () => {
      render(<Paginator pageNumber={pageNumber} bugsInfo={bugsInfo} />, {
        wrapper: MemoryRouter,
      });

      const currentPageIndicator = page.getByLabelText(/current page/i);

      expect(currentPageIndicator).toBeInTheDocument();
    });
  });

  describe("When it receives page number 2 and 1 bug with 17 total bugs", () => {
    const pageNumber = 2;
    const bugsPerPage = 16;
    const pageTwoBugsInitialPosition = 16;

    const bugsInfo: BugsInfo = {
      bugs: insectsCollection.slice(pageTwoBugsInitialPosition, bugsPerPage),
      bugsTotal: insectsCollection.length,
    };

    test("Then it should show 'Go to page 1' link", () => {
      const currentPageAriaLabel = /go to page 1/i;

      const linkAriaLabel = currentPageAriaLabel;

      render(<Paginator pageNumber={pageNumber} bugsInfo={bugsInfo} />, {
        wrapper: MemoryRouter,
      });

      const previousPageLink = page.getByRole("link", {
        name: linkAriaLabel,
      });

      expect(previousPageLink).toBeInTheDocument();
    });

    test("Then the current page should be 2", () => {
      const currentPageAriaLabel = /current page/i;

      render(<Paginator pageNumber={pageNumber} bugsInfo={bugsInfo} />, {
        wrapper: MemoryRouter,
      });

      const currentPageIndicator = page.getByLabelText(currentPageAriaLabel);

      expect(currentPageIndicator).toBeInTheDocument();
    });
  });
});
