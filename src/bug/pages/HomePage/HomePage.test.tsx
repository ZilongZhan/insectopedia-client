import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import HomePage from "./HomePage";
import { mapBugsDtoToBugs } from "../../dto/mappers";
import { insectsDtoCollection } from "../../dto/fixtures";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the HomePage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home' inside a heading", async () => {
      render(<HomePage />, { wrapper: AllContextsProvider });

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Insect One', 'Insect Two', 'Insect Three'...to 'Insect Sixteen' inside a heading each", () => {
      render(<HomePage />, { wrapper: AllContextsProvider });

      const expectedBugs = mapBugsDtoToBugs(insectsDtoCollection);

      expectedBugs.forEach(async ({ name }) => {
        const bugName = page.getByRole("heading", {
          name: new RegExp(name, "i"),
        });

        await expect.element(bugName).toBeInTheDocument();
      });
    });
  });
});
