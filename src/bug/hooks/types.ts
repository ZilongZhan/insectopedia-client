import type { BugFormData, BugsInfo } from "../types";

export interface UseBugsStructure {
  bugsInfo: BugsInfo;
  renderBugsInfo: (pageNumber: number) => Promise<void>;
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
}
