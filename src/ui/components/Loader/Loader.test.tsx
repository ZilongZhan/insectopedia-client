import { render } from "vitest-browser-react";
import Loader from "./Loader";
import { page } from "@vitest/browser/context";

describe("Given the Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Loading...'", () => {
      const expectedText = /loading/i;

      render(<Loader />);

      const loaderText = page.getByText(expectedText);

      expect(loaderText).toBeInTheDocument();
    });
  });
});
