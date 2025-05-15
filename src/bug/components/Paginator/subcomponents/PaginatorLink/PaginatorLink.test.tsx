import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router";
import { page } from "@vitest/browser/context";
import PaginatorLink from "./PaginatorLink";

describe("Given the PaginatorLink component", () => {
  describe("When it receives page number 1, total pages 2, and 'Hello World'", () => {
    test("Then it should show a 'Go to page 1' link with label 'Hello World'", () => {
      const pageNumber = 1;
      const pagesTotal = 2;
      const linkLabel = "Hello World";

      render(
        <PaginatorLink
          pageNumber={pageNumber}
          pagesTotal={pagesTotal}
          label={linkLabel}
        />,
        { wrapper: MemoryRouter },
      );

      const link = page.getByRole("link", { name: /go to page 1/i });

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(linkLabel);
    });
  });
});
