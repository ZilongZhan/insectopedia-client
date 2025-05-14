import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import HomePage from "./HomePage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";
import { insectsCollection } from "../../fixtures";

describe("Given the HomePage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home' inside a heading", async () => {
      render(<HomePage />, { wrapper: AllContextsProvider });

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Insect One', 'Insect Two', 'Insect Three'...to 'Insect Sixteen' inside a heading each", () => {
      render(<HomePage />, { wrapper: AllContextsProvider });

      insectsCollection.forEach(async ({ name }) => {
        const bugName = page.getByRole("heading", {
          name: new RegExp(`\\b${name}\\b`, "i"),
        });

        await expect.element(bugName).toBeInTheDocument();
      });
    });
  });
});
