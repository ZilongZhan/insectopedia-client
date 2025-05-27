import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import Layout from "./Layout";
import { insect1, insect17, insectsCollection } from "../../bug/fixtures";
import AppRouter from "../../router/AppRouter";
import AllContextsProvider from "../../testUtils/AllContextsProvider";
import fillBugForm from "../../testUtils/fillBugForm";
import setupStore from "../../store/setupStore";

describe("Given the Layout component", () => {
  const user = userEvent.setup();

  describe("When it renders", () => {
    test("Then it should show 'Insectopedia inside a level 1 heading", () => {
      const expectedTitle = /insectopedia/i;

      render(<Layout />, { wrapper: AllContextsProvider });

      const appTitle = page.getByRole("heading", { name: expectedTitle });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Home' link", () => {
      render(<Layout />, { wrapper: AllContextsProvider });

      const homeLink = page.getByRole("link", { name: /home/i });

      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("When it renders on /home", () => {
    test("Then it should show 'Insect One', 'Insect Two', 'Insect Three', ...to 'Insect Sixteen' each inside a heading", () => {
      render(
        <AllContextsProvider initialEntries={["/home"]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const expectedBugs = insectsCollection.slice(0, 16);

      expectedBugs.forEach(async ({ name }) => {
        const bugName = page.getByRole("heading", {
          name: new RegExp(`\\b${name}\\b`, "i"),
        });

        await expect.element(bugName).toBeInTheDocument();
      });
    });

    describe(`And the user clicks the 'Delete ${insect1.name}'`, () => {
      test("Then it should show 'Entry deleted successfully'", async () => {
        render(
          <AllContextsProvider
            initialEntries={["/home"]}
            customStore={setupStore()}
          >
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        const deleteInsectOneButton = page.getByRole("button", {
          name: new RegExp(`delete ${insect1.name}`, "i"),
        });

        await user.click(deleteInsectOneButton);

        const modalMessage = page.getByText(/entry deleted successfully/i);

        await expect.element(modalMessage).toBeInTheDocument();
      });

      describe("And the user clicks the 'Close modal' button", () => {
        test("Then it should not show 'Entry deleted successfully'", async () => {
          render(
            <AllContextsProvider
              initialEntries={["/home"]}
              customStore={setupStore()}
            >
              <AppRouter>
                <Layout />
              </AppRouter>
            </AllContextsProvider>,
          );

          const deleteInsectOneButton = page.getByRole("button", {
            name: new RegExp(`delete ${insect1.name}`, "i"),
          });

          await user.click(deleteInsectOneButton);

          const closeModalButton = page.getByRole("button", {
            name: /close modal/i,
          });

          await user.click(closeModalButton);

          const modalMessage = page.getByText(/entry deleted successfully/i);

          await expect.element(modalMessage).not.toBeInTheDocument();
        });
      });

      test("Then it should show 'Home' inside a heading", async () => {
        const expectedTitle = /home/i;

        render(
          <AllContextsProvider
            initialEntries={["/home"]}
            customStore={setupStore()}
          >
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        const deleteInsectOneButton = page.getByRole("button", {
          name: new RegExp(`delete ${insect1.name}`, "i"),
        });

        await user.click(deleteInsectOneButton);

        const pageTitle = page.getByRole("heading", { name: expectedTitle });

        await expect.element(pageTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it renders on /home?page=2", () => {
    test("Then it should show 'Insect Seventeen' inside a heading", async () => {
      render(
        <AllContextsProvider initialEntries={["/home?page=2"]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const insectSeventeenName = page.getByRole("heading", {
        name: new RegExp(`\\b${insect17.name}\\b`, "i"),
      });

      await expect.element(insectSeventeenName).toBeInTheDocument();
    });

    describe("And the user clicks 'Go to page 1' link", () => {
      test("Then it should show 'Insect One', 'Insect Two', 'Insect Three', ...to 'Insect Sixteen' each inside a heading", async () => {
        const linkAriaLabel = /go to page 1/i;
        const expectedBugs = insectsCollection.slice(0, 16);

        render(
          <AllContextsProvider initialEntries={["/home?page=2"]}>
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        const previousPageLink = page.getByRole("link", {
          name: linkAriaLabel,
        });

        await user.click(previousPageLink);

        expectedBugs.forEach(async ({ name }) => {
          const bugName = page.getByRole("heading", {
            name: new RegExp(`\\b${name}\\b`, "i"),
          });

          await expect.element(bugName).toBeInTheDocument();
        });
      });
    });
  });

  describe("When it renders on /report", () => {
    test("Then it should show 'New Report' inside a heading", () => {
      const expectedTitle = /new report/i;

      render(
        <AllContextsProvider initialEntries={["/report"]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const pageTitle = page.getByRole("heading", { name: expectedTitle });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Common name' input", () => {
      const inputLabel = /common name/i;

      render(
        <AllContextsProvider initialEntries={["/report"]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const nameInput = page.getByLabelText(inputLabel);

      expect(nameInput).toBeInTheDocument();
    });

    test("Then it should show a 'Send report' button that is disabled", () => {
      const buttonText = /send report/i;

      render(
        <AllContextsProvider initialEntries={["/report"]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const sendReportButton = page.getByRole("button", {
        name: buttonText,
      });

      expect(sendReportButton).toBeInTheDocument();
      expect(sendReportButton).toBeDisabled();
    });

    describe("And the user fills the 'Common name', 'Latin name', phylum, class, and order inputs of the 'Classification' section, 'Link to image', and 'Description' required fields", () => {
      const buttonText = /send report/i;

      test("Then the 'Send report' button should be enabled", async () => {
        render(
          <AllContextsProvider initialEntries={["/report"]}>
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        await fillBugForm(page, user);

        const sendReportButton = page.getByRole("button", {
          name: buttonText,
        });

        await expect.element(sendReportButton).toBeEnabled();
      });

      describe("And the user clicks the 'Send report' button", () => {
        test("Then it should show 'Report was sent successfully", async () => {
          render(
            <AllContextsProvider
              initialEntries={["/report"]}
              customStore={setupStore()}
            >
              <AppRouter>
                <Layout />
              </AppRouter>
            </AllContextsProvider>,
          );

          await fillBugForm(page, user);

          const sendReportButton = page.getByRole("button", {
            name: buttonText,
          });

          await expect.element(sendReportButton).toBeEnabled();
          await user.click(sendReportButton);

          const feedbackMessage = page.getByText(
            /report was sent successfully/i,
          );

          await expect.element(feedbackMessage).toBeInTheDocument();
        });
      });
    });
  });

  describe(`When it renders on /details/${insect1.id}`, () => {
    test("Then it should show 'Insect One' inside a heading", async () => {
      render(
        <AllContextsProvider initialEntries={[`/details/${insect1.id}`]}>
          <AppRouter>
            <Layout />
          </AppRouter>
        </AllContextsProvider>,
      );

      const bugName = page.getByRole("heading", {
        name: new RegExp(insect1.name, "i"),
      });

      await expect.element(bugName).toBeInTheDocument();
    });

    describe("And the user clicks the 'Delete entry' button", () => {
      test("Then it should show 'Entry deleted sucessfully'", async () => {
        const buttonText = /delete entry/i;

        render(
          <AllContextsProvider initialEntries={[`/details/${insect1.id}`]}>
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        const deleteEntryButton = page.getByRole("button", {
          name: buttonText,
        });

        await user.click(deleteEntryButton);

        const modalMessage = page.getByText(/entry deleted successfully/i);

        await expect.element(modalMessage).toBeInTheDocument();
      });
    });
  });
});
