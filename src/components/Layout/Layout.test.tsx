import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";
import { insect17, insectsCollection } from "../../bug/fixtures";
import AppRouter from "../../router/AppRouter";
import AllContextsProvider from "../../test-utils/AllContextsProvider";

describe("Given the Layout component", () => {
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
        const user = userEvent.setup();

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
});
