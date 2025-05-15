import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import ReportPage from "./ReportPage";

describe("Given the ReportPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New report' inside a heading", () => {
      render(<ReportPage />);

      const pageTitle = page.getByRole("heading", { name: /new report/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
