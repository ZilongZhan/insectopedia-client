import { useState } from "react";
import type { BugFormData } from "../../types";
import type { UseFormStructure } from "../types";
import classifications from "../../../data/classification";

const useForm = (): UseFormStructure => {
  const initialData: BugFormData = {
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

  const [bugFormData, setBugFormData] = useState<BugFormData>(initialData);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
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
    handleSubmit,
    isValidData,
    classOptions,
    orderOptions,
  };
};

export default useForm;
