import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import PaginatorIndicator from "./PaginatorIndicator";

describe("Given the PaginatorIndicator component", () => {
  describe("When it receives page number 1 and total pages 1", () => {
    test("Then it should show '1'", () => {
      const pageNumber = 1;
      const pagesTotal = 1;

      render(
        <PaginatorIndicator pageNumber={pageNumber} pagesTotal={pagesTotal} />,
      );

      const pageIndicator = page.getByText("1");

      expect(pageIndicator).toBeInTheDocument();
    });
  });

  describe("When it receives page number 0 ant total pages 1", () => {
    test("Then it should show '-'", () => {
      const pageNumber = 0;
      const pagesTotal = 1;

      render(
        <PaginatorIndicator pageNumber={pageNumber} pagesTotal={pagesTotal} />,
      );

      const pageIndicator = page.getByText("-");

      expect(pageIndicator).toBeInTheDocument();
    });
  });

  describe("When it receives page number 2 and total pages 1", () => {
    test("then it should show '-'", () => {
      const pageNumber = 2;
      const pagesTotal = 1;

      render(
        <PaginatorIndicator pageNumber={pageNumber} pagesTotal={pagesTotal} />,
      );

      const pageIndicator = page.getByText("-");

      expect(pageIndicator).toBeInTheDocument();
    });
  });
});
