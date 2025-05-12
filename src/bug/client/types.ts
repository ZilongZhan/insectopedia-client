import type { BugsInfo } from "../types";

export interface BugsClientStructure {
  getBugsInfo: (pageNumber?: number) => Promise<BugsInfo>;
}
