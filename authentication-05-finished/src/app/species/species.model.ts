export interface ISpecies {
  _id: string;
  key: number;
  kingdom: string;
  phylum: string;
  order: string;
  family: string;
  genus: string;
  species: number;
  kingdomKey: number;
  phylumKey: number;
  classKey: number;
  orderKey: number;
  familyKey: number;
  genusKey: number;
  speciesKey: number;
  parent: string;
  parentKey: number;
  scientificName: string;
  canonicalName: string;
  rank: string;
  status: string;
  higherClassificationMap: {
    1: string,
    44: string,
    359: string,
    732: string,
    9703: string,
    2435098: string
    };
  synonym: string;
  class: string;
}
