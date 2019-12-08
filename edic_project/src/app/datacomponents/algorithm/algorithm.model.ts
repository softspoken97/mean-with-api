export interface IAlgorithm {
  _id: string;
  authors: string;
  link: string;
  software: string;
  description: string;
  parameters: [{
    displayName: string;
    default: string;
  }];
  code: string;
  name: string;
  version: number;

}
