import type { BrowserPage, UserEvent } from "@vitest/browser/context";

const fillBugForm = async (
  page: BrowserPage,
  user: UserEvent,
): Promise<void> => {
  const bugCommonName = "Housefly";
  const bugLatinName = "Musca domestica";
  const bugPhylum = "Arthropoda";
  const bugClass = "Insecta";
  const bugOrder = "Diptera";
  const bugImageLink = "http://housefly.com/housefly.webp";
  const bugDescription =
    "The housefly (Musca domestica) is a fly of the suborder Cyclorrhapha. It possibly originated in the Middle East, and spread around the world as a commensal of humans.";

  const commonNameInputLabel = /common name/i;
  const latinNameInputLabel = /latin name/i;
  const classificationSectionLabel = /classification/i;
  const phylumSelectDefaultOption = /phylum/i;
  const classSelectDefaultOption = /class/i;
  const orderSelectDefaultOption = /order/i;
  const imageLinkInputLabel = /link to image/i;
  const descriptionInputLabel = /description/i;

  const commonNameInput = page.getByLabelText(commonNameInputLabel);
  const latinNameInput = page.getByLabelText(latinNameInputLabel);
  const classificationSection = page.getByRole("group", {
    name: classificationSectionLabel,
  });
  const phylumSelect = classificationSection.getByRole("combobox", {
    name: phylumSelectDefaultOption,
  });
  const classSelect = classificationSection.getByRole("combobox", {
    name: classSelectDefaultOption,
  });
  const orderSelect = classificationSection.getByRole("combobox", {
    name: orderSelectDefaultOption,
  });
  const imageLinkInput = page.getByLabelText(imageLinkInputLabel);
  const descriptionInput = page.getByLabelText(descriptionInputLabel);

  await user.type(commonNameInput, bugCommonName);
  await user.type(latinNameInput, bugLatinName);
  await phylumSelect.selectOptions(bugPhylum);
  await classSelect.selectOptions(bugClass);
  await orderSelect.selectOptions(bugOrder);
  await user.type(imageLinkInput, bugImageLink);
  await user.type(descriptionInput, bugDescription);
};

export default fillBugForm;
