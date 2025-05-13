import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../../store/store";
import HomePage from "./HomePage";

describe("Given the HomePage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Home' inside a heading", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
