import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import ReportPage from "./ReportPage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the ReportPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New report' inside a heading", () => {
      render(<ReportPage />, { wrapper: AllContextsProvider });

      const pageTitle = page.getByRole("heading", { name: /new report/i });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Common name' input", () => {
      const inputLabel = /common name/i;

      render(<ReportPage />, { wrapper: AllContextsProvider });

      const commonNameInput = page.getByLabelText(inputLabel);

      expect(commonNameInput).toBeInTheDocument();
    });

    test("Then it should show a 'Send report' button", () => {
      const buttonText = /send report/i;

      render(<ReportPage />, { wrapper: AllContextsProvider });

      const sendReportButton = page.getByRole("button", {
        name: buttonText,
      });

      expect(sendReportButton).toBeInTheDocument();
    });
  });
});
