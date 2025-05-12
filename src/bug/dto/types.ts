import type { Bug } from "../types";

export type BugDto = Omit<
  Bug,
  "id" | "name" | "scientificName" | "imageAlt" | "taxonomy"
> & {
  _id: string;
  commonName: string;
  latinName: string;
  phylum: string;
  className: string;
  order: string;
};

export interface BugsInfoDto {
  bugs: BugDto[];
  bugsTotal: number;
}
