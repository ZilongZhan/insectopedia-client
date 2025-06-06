describe("template spec", () => {
  it("The user should be able to send a new report about the Housefly", () => {
    cy.visit("/report");

    cy.findByLabelText(/common name/i).type("Housefly");
    cy.findByLabelText(/latin name/i).type("Musca domestica");
    cy.findByRole("combobox", { name: /phylum/i }).select("Arthropoda");
    cy.findByRole("combobox", { name: /class/i }).select("Insecta");
    cy.findByRole("combobox", { name: /order/i }).select("Diptera");
    cy.findByLabelText(/link to image/i).type(
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Housefly_on_a_leaf_crop.jpg",
    );
    cy.findByLabelText(/description/i).type(
      "The housefly (Musca domestica) is a fly of the suborder Cyclorrhapha. It possibly originated in the Middle East, and spread around the world as a commensal of humans.",
    );

    cy.findByRole("button", { name: /send report/i }).click();

    cy.findByText(/report was sent successfully/i).should("be.visible");
  });

  it("The user should be able to delete the entry about the Housefly", () => {
    cy.visit("/home");

    cy.findByRole("button", { name: /delete housefly/i }).click();

    cy.findByText(/entry deleted successfully/i).should("be.visible");
  });
});
