import type { BugDto } from "../dto/types";
import type { Bug, BugFormData, BugsInfo } from "../types";

export interface BugsClientStructure {
  getBugsInfo: (pageNumber?: number) => Promise<BugsInfo>;
  addBug: (bugFormData: BugFormData) => Promise<Bug>;
  deleteBugById: (bugId: string) => Promise<Bug>;
}

export interface BugResponse {
  bug: BugDto;
}
