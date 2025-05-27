import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show silhouette of a mosquito next to the number 404", () => {
      render(<NotFoundPage />);

      const svgElement = page.getByRole("img", {
        name: /silhouette of a mosquito next to the number 404/i,
      });

      expect(svgElement).toBeInTheDocument();
    });

    test("Then it should show 'The page you're looking for doesn't exist'", () => {
      render(<NotFoundPage />);

      const notFoundMessage = page.getByText(
        /the page you're looking for doesn't exist/i,
      );

      expect(notFoundMessage).toBeInTheDocument();
    });
  });
});
