import type { Bug } from "../types";
import type { BugDto } from "./types";

export const mapBugDtoToBug = ({
  _id,
  commonName,
  latinName,
  phylum,
  className,
  order,
  ...bugProperties
}: BugDto): Bug => {
  return {
    ...bugProperties,
    id: _id,
    name: commonName,
    scientificName: latinName,
    imageAlt: `Portrait of the ${commonName} (${latinName}) in its natural glory.`,
    taxonomy: [phylum, className, order],
  };
};

export const mapBugsDtoToBugs = (bugsDto: BugDto[]): Bug[] => {
  return bugsDto.map((bugDto) => mapBugDtoToBug(bugDto));
};
