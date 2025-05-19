import {
  insect10Dto,
  insect11Dto,
  insect12Dto,
  insect13Dto,
  insect14Dto,
  insect15Dto,
  insect16Dto,
  insect17Dto,
  insect1Dto,
  insect2Dto,
  insect3Dto,
  insect4Dto,
  insect5Dto,
  insect6Dto,
  insect7Dto,
  insect8Dto,
  insect9Dto,
  insectsDtoCollection,
} from "./dto/fixtures";
import { mapBugDtoToBug, mapBugsDtoToBugs } from "./dto/mappers";
import type { BugFormData } from "./types";

export const insect1 = mapBugDtoToBug(insect1Dto);
export const insect2 = mapBugDtoToBug(insect2Dto);
export const insect3 = mapBugDtoToBug(insect3Dto);
export const insect4 = mapBugDtoToBug(insect4Dto);
export const insect5 = mapBugDtoToBug(insect5Dto);
export const insect6 = mapBugDtoToBug(insect6Dto);
export const insect7 = mapBugDtoToBug(insect7Dto);
export const insect8 = mapBugDtoToBug(insect8Dto);
export const insect9 = mapBugDtoToBug(insect9Dto);
export const insect10 = mapBugDtoToBug(insect10Dto);
export const insect11 = mapBugDtoToBug(insect11Dto);
export const insect12 = mapBugDtoToBug(insect12Dto);
export const insect13 = mapBugDtoToBug(insect13Dto);
export const insect14 = mapBugDtoToBug(insect14Dto);
export const insect15 = mapBugDtoToBug(insect15Dto);
export const insect16 = mapBugDtoToBug(insect16Dto);
export const insect17 = mapBugDtoToBug(insect17Dto);

export const insectsCollection = mapBugsDtoToBugs(insectsDtoCollection);

export const insect1FormData: BugFormData = {
  name: "Insect One",
  scientificName: "Insecta oneus",
  imageUrl: "/images/insect1.jpg",
  description: "Description of Insect One",
  isDangerous: false,
  isFavorite: false,
  phylum: "PlaceholderPhylum",
  className: "PlaceholderClass",
  order: "PlaceholderOrder",
};

export const insect2FormData: BugFormData = {
  name: "Insect Two",
  scientificName: "Insecta twous",
  imageUrl: "/images/insect2.jpg",
  description: "Description of Insect Two",
  isDangerous: true,
  isFavorite: false,
  phylum: "PlaceholderPhylum",
  className: "PlaceholderClass",
  order: "PlaceholderOrder",
};

export const insect3FormData: BugFormData = {
  name: "Insect Three",
  scientificName: "Insecta threus",
  imageUrl: "/images/insect3.jpg",
  description: "Description of Insecto Three",
  isDangerous: false,
  isFavorite: true,
  phylum: "PlaceholderPhylum",
  className: "PlaceholderClass",
  order: "PlaceholderOrder",
};
