import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import BugsList from "./BugsList";
import { insect1, insect2, insect3, insect4, insect5 } from "../../fixtures";

describe("Given the BugsList component", () => {
  describe("When it receives insect 1 to 5", () => {
    test("Then it should show Insect One, Insect Two, Insect Three, Insect Four, Insect Five inside a heading", () => {
      const bugs = [insect1, insect2, insect3, insect4, insect5];

      render(<BugsList bugs={bugs} />);

      bugs.forEach((bug) => {
        const bugNameElement = page.getByRole("heading", {
          name: new RegExp(bug.name),
        });

        expect(bugNameElement).toBeInTheDocument();
      });
    });
  });
});
