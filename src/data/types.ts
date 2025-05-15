export interface Class {
  name: string;
  orders: string[];
}

export interface Phylum {
  name: string;
  classes: Class[];
}
