import { screen, render } from "@testing-library/react";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MemoryRouter } from "react-router";

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

      const pageTitle = screen.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
