import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";
import { insect17, insectsCollection } from "../../bug/fixtures";
import AppRouter from "../../router/AppRouter";
import AllContextsProvider from "../../test-utils/AllContextsProvider";

describe("Given the Layout component", () => {
  const user = userEvent.setup();

  describe("When it renders", () => {
    test("Then it should show 'Insectopedia inside a level 1 heading", () => {
      const expectedTitle = /insectopedia/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = page.getByRole("heading", { name: expectedTitle });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show a 'Home' link", () => {
      render(<Layout />, { wrapper: MemoryRouter });

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
      const bugCommonName = "Housefly";
      const bugLatinName = "Musca domestica";
      const bugPhylum = "Arthropoda";
      const bugClass = "Insecta";
      const bugOrder = "Diptera";
      const bugImageLink = "http://housefly.com/housefly.webp";
      const bugDescription =
        "The housefly (Musca domestica) is a fly of the suborder Cyclorrhapha. It possibly originated in the Middle East, and spread around the world as a commensal of humans.";

      const commonNameInputLabel = /common name/i;
      const latinNameInputLabel = /latin name/i;
      const classificationSectionLabel = /classification/i;
      const phylumSelectDefaultOption = /phylum/i;
      const classSelectDefaultOption = /class/i;
      const orderSelectDefaultOption = /order/i;
      const imageLinkInputLabel = /link to image/i;
      const descriptionInputLabel = /description/i;

      const buttonText = /send report/i;

      test("Then the 'Send report' button should be enabled", async () => {
        render(
          <AllContextsProvider initialEntries={["/report"]}>
            <AppRouter>
              <Layout />
            </AppRouter>
          </AllContextsProvider>,
        );

        const commonNameInput = page.getByLabelText(commonNameInputLabel);
        const latinNameInput = page.getByLabelText(latinNameInputLabel);
        const classificationSection = page.getByRole("group", {
          name: classificationSectionLabel,
        });
        const phylumSelect = classificationSection.getByRole("combobox", {
          name: phylumSelectDefaultOption,
        });
        const classSelect = classificationSection.getByRole("combobox", {
          name: classSelectDefaultOption,
        });
        const orderSelect = classificationSection.getByRole("combobox", {
          name: orderSelectDefaultOption,
        });
        const imageLinkInput = page.getByLabelText(imageLinkInputLabel);
        const descriptionInput = page.getByLabelText(descriptionInputLabel);

        await user.type(commonNameInput, bugCommonName);
        await user.type(latinNameInput, bugLatinName);
        await phylumSelect.selectOptions(bugPhylum);
        await classSelect.selectOptions(bugClass);
        await orderSelect.selectOptions(bugOrder);
        await user.type(imageLinkInput, bugImageLink);
        await user.type(descriptionInput, bugDescription);

        const sendReportButton = page.getByRole("button", {
          name: buttonText,
        });

        await expect.element(sendReportButton).toBeEnabled();
      });

      describe("And the user clicks the 'Send report' button", () => {
        test("Then it should show 'Home'", async () => {
          const expectedTitle = /home/i;

          render(
            <AllContextsProvider initialEntries={["/report"]}>
              <AppRouter>
                <Layout />
              </AppRouter>
            </AllContextsProvider>,
          );

          const commonNameInput = page.getByLabelText(commonNameInputLabel);
          const latinNameInput = page.getByLabelText(latinNameInputLabel);
          const classificationSection = page.getByRole("group", {
            name: classificationSectionLabel,
          });
          const phylumSelect = classificationSection.getByRole("combobox", {
            name: phylumSelectDefaultOption,
          });
          const classSelect = classificationSection.getByRole("combobox", {
            name: classSelectDefaultOption,
          });
          const orderSelect = classificationSection.getByRole("combobox", {
            name: orderSelectDefaultOption,
          });
          const imageLinkInput = page.getByLabelText(imageLinkInputLabel);
          const descriptionInput = page.getByLabelText(descriptionInputLabel);

          await user.type(commonNameInput, bugCommonName);
          await user.type(latinNameInput, bugLatinName);
          await phylumSelect.selectOptions(bugPhylum);
          await classSelect.selectOptions(bugClass);
          await orderSelect.selectOptions(bugOrder);
          await user.type(imageLinkInput, bugImageLink);
          await user.type(descriptionInput, bugDescription);

          const sendReportButton = page.getByRole("button", {
            name: buttonText,
          });

          await user.click(sendReportButton);

          const pageTitle = page.getByRole("heading", { name: expectedTitle });

          await expect.element(pageTitle).toBeInTheDocument();
        });
      });
    });
  });
});
