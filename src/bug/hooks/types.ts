import type { Class } from "../../data/types";
import type { BugFormData, BugsInfo } from "../types";

export interface UseBugsStructure {
  bugsInfo: BugsInfo;
  renderBugsInfo: (pageNumber: number) => Promise<void>;
  addNewReport: (bugFormData: BugFormData) => Promise<void>;
}

export interface UsePaginatorStructure {
  doesPageExist: (pageNumber: number) => boolean;
}

export interface UseFormStructure {
  bugFormData: BugFormData;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  isValidData: boolean;
  classOptions: Class[];
  orderOptions: string[];
}
