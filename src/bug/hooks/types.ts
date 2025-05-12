import type { BugsInfo } from "../types";

export interface useBugsStructure {
  bugsInfo: BugsInfo;
  renderBugsInfo: (pageNumber: number) => Promise<void>;
}
