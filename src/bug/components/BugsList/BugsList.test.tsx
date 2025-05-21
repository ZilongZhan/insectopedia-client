import { render } from "vitest-browser-react";
import { Provider } from "react-redux";
import { page } from "@vitest/browser/context";
import BugsList from "./BugsList";
import { insectsCollection } from "../../fixtures";
import store from "../../../store/store";

describe("Given the BugsList component", () => {
  describe("When it receives insect 1 to 5", () => {
    test("Then it should show 'Insect One', 'Insect Two', 'Insect Three', ... to 'Insect Sixteen' inside a heading each", () => {
      render(
        <Provider store={store}>
          <BugsList bugs={insectsCollection} />
        </Provider>,
      );

      insectsCollection.forEach((bug) => {
        const bugNameElement = page.getByRole("heading", {
          name: new RegExp(`\\b${bug.name}\\b`, "i"),
        });

        expect(bugNameElement).toBeInTheDocument();
      });
    });
  });
});
