import type { ReactElement } from "react";
import type { BugsInfo } from "../types";

export interface UseBugsStructure {
  bugsInfo: BugsInfo;
  renderBugsInfo: (pageNumber: number) => Promise<void>;
}

export interface UsePaginatorStructure {
  renderLink: (pageNumber: number, label: string) => ReactElement | undefined;
  renderIndicator: (
    pageNumber: number,
    isCurrent?: boolean,
  ) => ReactElement | undefined;
}
