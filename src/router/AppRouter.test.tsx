import { render } from "vitest-browser-react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import AppRouter from "./AppRouter";
import { page } from "@vitest/browser/context";
import store from "../store/store";

describe("Given the AppRouter component", () => {
  describe("When it renders on non-existent path /test", () => {
    test("Then it should show silhouette of a mosquito next to the number 404", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/test"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const svgElement = page.getByRole("img", {
        name: /silhouette of a mosquito next to the number 404/i,
      });

      await expect.element(svgElement).toBeInTheDocument();
    });

    test("Then it should show 'The page you're looking for doesn't exist'", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/test"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const notFoundMessage = page.getByText(
        /the page you're looking for doesn't exist/i,
      );

      await expect.element(notFoundMessage).toBeInTheDocument();
    });
  });

  describe("When it renders on path /home", () => {
    test("Then it should show 'Home' inside a heading", () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/home"]}>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
