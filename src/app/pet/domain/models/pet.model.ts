export interface PetModel {
  id: number;
  name: string;
  kind: string;
  weight: number;
  height: number;
  length: number;
  photoUrl: string;
  description: string;
  numberOfLives?: number;
}
