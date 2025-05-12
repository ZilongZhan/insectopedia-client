import { render } from "vitest-browser-react";
import BugCard from "./BugCard";
import { insect1 } from "../../fixtures";
import { page } from "@vitest/browser/context";

describe("Given the BugCard component", () => {
  describe("When it receives insect 1", () => {
    test("Then it should show portrait of the Insect One (Insecta Oneus) in its natural glory", () => {
      render(<BugCard bug={insect1} />);

      const bugImage = page.getByAltText(
        "Portrait of the Insect One (Insecta oneus) in its natural glory",
      );

      expect(bugImage).toBeInTheDocument();
    });

    test("Then it should show 'Insect One' inside a heading", () => {
      render(<BugCard bug={insect1} />);

      const bugName = page.getByRole("heading", { name: /insect one/i });

      expect(bugName).toBeInTheDocument();
    });

    test("Then it should show 'Insecta oneus'", () => {
      render(<BugCard bug={insect1} />);

      const bugLatinName = page.getByText("Insecta oneus");

      expect(bugLatinName).toBeInTheDocument();
    });

    test("Then it should show icon of a 5 pointed star", () => {
      render(<BugCard bug={insect1} />);

      const StarSvg = page.getByRole("img", {
        name: /icon of a 5 pointed star/i,
      });

      expect(StarSvg).toBeInTheDocument();
    });
  });
});
