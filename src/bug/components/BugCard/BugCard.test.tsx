import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import BugCard from "./BugCard";
import { insect1 } from "../../fixtures";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the BugCard component", () => {
  describe("When it receives insect 1", () => {
    test("Then it should show portrait of the Insect One (Insecta Oneus) in its natural glory", () => {
      render(<BugCard bug={insect1} index={0} />, {
        wrapper: AllContextsProvider,
      });

      const bugImage = page.getByAltText(
        "Portrait of the Insect One (Insecta oneus) in its natural glory",
      );

      expect(bugImage).toBeInTheDocument();
    });

    test("Then it should show 'Insect One' inside a heading", () => {
      render(<BugCard bug={insect1} index={0} />, {
        wrapper: AllContextsProvider,
      });

      const bugName = page.getByRole("heading", { name: /insect one/i });

      expect(bugName).toBeInTheDocument();
    });

    test("Then it should show 'Insecta oneus'", () => {
      render(<BugCard bug={insect1} index={0} />, {
        wrapper: AllContextsProvider,
      });

      const bugLatinName = page.getByText("Insecta oneus");

      expect(bugLatinName).toBeInTheDocument();
    });

    test("Then it should show icon of a 5 pointed star", () => {
      render(<BugCard bug={insect1} index={0} />, {
        wrapper: AllContextsProvider,
      });

      const StarSvg = page.getByRole("img", {
        name: /icon of a 5 pointed star/i,
      });

      expect(StarSvg).toBeInTheDocument();
    });

    test("Then it should show a 'Delete Insect One' button", () => {
      const buttonText = new RegExp(`delete ${insect1.name}`, "i");

      render(<BugCard bug={insect1} index={0} />, {
        wrapper: AllContextsProvider,
      });

      const deleteButton = page.getByRole("button", {
        name: buttonText,
      });

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
