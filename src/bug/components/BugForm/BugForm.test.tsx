import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import BugForm from "./BugForm";
import AllContextsProvider from "../../../testUtils/AllContextsProvider";

describe("Given the BugForm component", () => {
  const user = userEvent.setup();

  describe("When it renders", () => {
    test("Then it should show a 'Common name' input", () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const nameInput = page.getByLabelText(/common name/i);

      expect(nameInput).toBeInTheDocument();
    });

    test("Then it should show a disabled 'Send report' button", () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const submitButton = page.getByRole("button", { name: /send report/i });

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    test("Then it should show a 'Add to favorites' input", () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const isFavoriteInput = page.getByLabelText(/add to favorites/i);

      expect(isFavoriteInput).toBeInTheDocument();
    });

    test("Then it should show a 'Classification' form section with phylum, class, and order inputs", () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const classInput = classificationSection.getByRole("combobox", {
        name: /class/i,
      });
      const phylumInput = classificationSection.getByRole("combobox", {
        name: /phylum/i,
      });
      const orderInput = classificationSection.getByRole("combobox", {
        name: /order/i,
      });

      expect(classificationSection).toBeInTheDocument();
      expect(phylumInput).toBeInTheDocument();
      expect(classInput).toBeInTheDocument();
      expect(orderInput).toBeInTheDocument();
    });
  });

  describe("When the user types 'Hello World' in the 'Common name' input", () => {
    test("Then it should show 'Hello World'", async () => {
      const expectedInput = "Hello World";
      const inputLabel = /common name/i;

      render(<BugForm />, { wrapper: AllContextsProvider });

      const nameInput = page.getByLabelText(inputLabel);

      await user.type(nameInput, expectedInput);

      expect(nameInput).toHaveValue(expectedInput);
    });
  });

  describe("When the user clicks 'Add to favorites' input", () => {
    test("Then it should be checked", async () => {
      const inputLabel = /add to favorites/i;

      render(<BugForm />, { wrapper: AllContextsProvider });

      const isFavoriteInput = page.getByLabelText(inputLabel);

      await user.click(isFavoriteInput);

      expect(isFavoriteInput).toBeChecked();
    });
  });

  describe("When the 'Arthropoda' option of the phylum input in 'Classification' section is selected", () => {
    test("Then it the 'Arthropoda' option should be selected", async () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const phylumInput = classificationSection.getByRole("combobox", {
        name: /phylum/i,
      });

      await phylumInput.selectOptions("Arthropoda");

      expect(phylumInput).toHaveValue("Arthropoda");
    });

    test("Then the 'Insecta' option of the class input in 'Classification' section should be available", async () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const phylumInput = classificationSection.getByRole("combobox", {
        name: /phylum/i,
      });

      await phylumInput.selectOptions("Arthropoda");

      const classInput = classificationSection.getByRole("combobox", {
        name: /class/i,
      });

      const insectaOption = classInput.getByRole("option", {
        name: /insecta/i,
      });

      expect(insectaOption).toBeInTheDocument();
    });
  });

  describe("When the 'Insecta' option of the class input in 'Classification' section is selected", () => {
    test("Then the 'Coleoptera' option of the order input in 'Classification' section should be available", async () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const phylumInput = classificationSection.getByRole("combobox", {
        name: /phylum/i,
      });

      await phylumInput.selectOptions("Arthropoda");

      const classInput = classificationSection.getByRole("combobox", {
        name: /class/i,
      });

      await classInput.selectOptions("Insecta");

      const orderInput = classificationSection.getByRole("combobox", {
        name: /order/i,
      });

      const coleopteraOption = orderInput.getByRole("option", {
        name: /coleoptera/i,
      });

      expect(coleopteraOption).toBeInTheDocument();
    });
  });

  describe("When no option of the phylum input in 'Classification' section is selected", () => {
    test("Then the 'Insecta' option of the class input in 'Classification' section should not be available", async () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const classInput = classificationSection.getByRole("combobox", {
        name: /class/i,
      });

      const insectaOption = classInput.getByRole("option", {
        name: /insecta/i,
      });

      await expect.element(insectaOption).not.toBeInTheDocument();
    });
  });

  describe("When no option of the class input in 'Classification' section is selected", () => {
    test("Then the 'Coleoptera' option of the order intpu in 'Classification' section should not be available", async () => {
      render(<BugForm />, { wrapper: AllContextsProvider });

      const classificationSection = page.getByRole("group", {
        name: /classification/i,
      });

      const orderInput = classificationSection.getByRole("combobox", {
        name: /order/i,
      });

      const coleopteraOption = orderInput.getByRole("option", {
        name: /coleoptera/i,
      });

      await expect.element(coleopteraOption).not.toBeInTheDocument();
    });
  });
});
