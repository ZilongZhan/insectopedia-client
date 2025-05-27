import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import BugsList from "./BugsList";
import { insectsCollection } from "../../fixtures";
import AllContextsProvider from "../../../testUtils/AllContextsProvider";

describe("Given the BugsList component", () => {
  describe("When it receives insect 1 to 5", () => {
    test("Then it should show 'Insect One', 'Insect Two', 'Insect Three', ... to 'Insect Sixteen' inside a heading each", () => {
      render(<BugsList bugs={insectsCollection} />, {
        wrapper: AllContextsProvider,
      });

      insectsCollection.forEach((bug) => {
        const bugNameElement = page.getByRole("heading", {
          name: new RegExp(`\\b${bug.name}\\b`, "i"),
        });

        expect(bugNameElement).toBeInTheDocument();
      });
    });
  });
});
