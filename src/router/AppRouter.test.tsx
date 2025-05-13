import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router";
import AppRouter from "./AppRouter";
import { page } from "@vitest/browser/context";
import store from "../store/store";
import { Provider } from "react-redux";

describe("Given the AppRouter component", () => {
  describe("When it renders on non-existent path /test", () => {
    test("Then it should show silhouette of a mosquito next to the number 404", async () => {
      render(
        <MemoryRouter initialEntries={["/test"]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const svgElement = page.getByRole("img", {
        name: /silhouette of a mosquito next to the number 404/i,
      });

      await expect.element(svgElement).toBeInTheDocument();
    });

    test("Then it should show 'The page you're looking for doesn't exist'", async () => {
      render(
        <MemoryRouter initialEntries={["/test"]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
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
        <MemoryRouter initialEntries={["/home"]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = page.getByRole("heading", { name: /home/i });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
