export interface PetEntity {
  id: number;
  name: string;
  kind: string;
  weight: number;
  height: number;
  length: number;
  photo_url: string;
  description: string;
  number_of_lives?: number;
}
