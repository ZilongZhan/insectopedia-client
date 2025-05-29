import { useState } from "react";
import type { BugFormData } from "../../types";
import type { UseFormStructure } from "../types";
import classifications from "../../data/classification";
import useBugs from "../useBugs/useBugs";

const initialBug: BugFormData = {
  name: "",
  scientificName: "",
  description: "",
  imageUrl: "",
  isFavorite: false,
  isDangerous: false,
  className: "",
  order: "",
  phylum: "",
};

const useForm = (
  bugId?: string,
  initialData = initialBug,
): UseFormStructure => {
  const [bugFormData, setBugFormData] = useState<BugFormData>(initialData);
  const { addNewReport, updateReport } = useBugs();

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ): void => {
    const property = event.target.id;

    const value =
      event.target.type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    setBugFormData((bugFormData) => ({
      ...bugFormData,
      [property]: value,
    }));
  };

  const handleAddBug = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    addNewReport(bugFormData);
  };

  const handleEdit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!bugId) {
      throw new Error("Missing bug ID to edit bug");
    }

    updateReport(bugId, bugFormData);
  };

  const isValidData =
    bugFormData.className !== "" &&
    bugFormData.description !== "" &&
    bugFormData.imageUrl !== "" &&
    bugFormData.name !== "" &&
    bugFormData.order !== "" &&
    bugFormData.phylum !== "" &&
    bugFormData.scientificName !== "";

  const selectedPhylum = classifications.find(
    (thisPhylum) => thisPhylum.name === bugFormData.phylum,
  );
  const selectedClass = selectedPhylum?.classes.find(
    (thisClass) => thisClass.name === bugFormData.className,
  );

  const classOptions = selectedPhylum?.classes ?? [];
  const orderOptions = selectedClass?.orders ?? [];

  return {
    bugFormData,
    handleOnChange,
    handleAddBug: handleAddBug,
    handleEditBug: handleEdit,
    isValidData,
    classOptions,
    orderOptions,
  };
};

export default useForm;
