import { Observable } from 'rxjs';

import { PetModel } from '../../domain/models/pet.model';

export interface PetStore {
  // selectors
  getPets(): Observable<PetModel[]>;

  // commands
  updatePets(pets: PetModel[]): void;
}
