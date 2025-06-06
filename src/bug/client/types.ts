import type { BugDto } from "../dto/types";
import type { Bug, BugFormData, BugsInfo } from "../types";

export interface BugsClientStructure {
  getBugsInfo: (pageNumber?: number) => Promise<BugsInfo>;
  addBug: (bugFormData: BugFormData) => Promise<Bug>;
  deleteBugById: (bugId: string) => Promise<Bug>;
  getBugById: (bugId: string) => Promise<Bug>;
  toggleIsFavorite: (bugId: string) => Promise<Bug>;
  editBug: (bugId: string, bugFormData: BugFormData) => Promise<Bug>;
}

export interface BugResponse {
  bug: BugDto;
}

export interface ErrorResponse {
  error: string;
}
