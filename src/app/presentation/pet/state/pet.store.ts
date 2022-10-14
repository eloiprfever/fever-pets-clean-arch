import { Observable } from 'rxjs';

import { PetModel } from 'src/app/domain/pet/models/pet.model';

export abstract class PetStore {
  // selectors
  abstract getPets(): Observable<PetModel[]>;

  // commands
  abstract updatePets(pets: PetModel[]): void;
}
