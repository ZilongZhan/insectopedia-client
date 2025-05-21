import { render } from "vitest-browser-react";
import { Provider } from "react-redux";
import { page } from "@vitest/browser/context";
import BugCard from "./BugCard";
import { insect1 } from "../../fixtures";
import store from "../../../store/store";

describe("Given the BugCard component", () => {
  describe("When it receives insect 1", () => {
    test("Then it should show portrait of the Insect One (Insecta Oneus) in its natural glory", () => {
      render(
        <Provider store={store}>
          <BugCard bug={insect1} index={0} />
        </Provider>,
      );

      const bugImage = page.getByAltText(
        "Portrait of the Insect One (Insecta oneus) in its natural glory",
      );

      expect(bugImage).toBeInTheDocument();
    });

    test("Then it should show 'Insect One' inside a heading", () => {
      render(
        <Provider store={store}>
          <BugCard bug={insect1} index={0} />
        </Provider>,
      );

      const bugName = page.getByRole("heading", { name: /insect one/i });

      expect(bugName).toBeInTheDocument();
    });

    test("Then it should show 'Insecta oneus'", () => {
      render(
        <Provider store={store}>
          <BugCard bug={insect1} index={0} />
        </Provider>,
      );

      const bugLatinName = page.getByText("Insecta oneus");

      expect(bugLatinName).toBeInTheDocument();
    });

    test("Then it should show icon of a 5 pointed star", () => {
      render(
        <Provider store={store}>
          <BugCard bug={insect1} index={0} />
        </Provider>,
      );

      const StarSvg = page.getByRole("img", {
        name: /icon of a 5 pointed star/i,
      });

      expect(StarSvg).toBeInTheDocument();
    });

    test("Then it should show a 'Delete Insect One' button", () => {
      const buttonText = new RegExp(`delete ${insect1.name}`, "i");

      render(
        <Provider store={store}>
          <BugCard bug={insect1} index={0} />
        </Provider>,
      );

      const deleteButton = page.getByRole("button", {
        name: buttonText,
      });

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
