export interface Bug {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  isDangerous: boolean;
  isFavorite: boolean;
  taxonomy: [phylum: string, className: string, order: string];
}

export interface BugsInfo {
  bugs: Bug[];
  bugsTotal: number;
}
