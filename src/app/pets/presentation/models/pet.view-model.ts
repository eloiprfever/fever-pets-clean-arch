export interface PetViewModel {
  id: number;
  name: string;
  kind: string;
  weight: number;
  height: number;
  length: number;
  imgUrl: string;
  description: string;
  numberOfLives?: number;
}
