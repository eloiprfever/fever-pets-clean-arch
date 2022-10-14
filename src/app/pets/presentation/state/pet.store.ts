import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

import { PetModel } from '../../domain/models/pet.model';

export const PET_STORE = new InjectionToken<PetStore>('PetStore');

export interface PetStore {
  // selectors
  getPets(): Observable<PetModel[]>;

  // commands
  updatePets(pets: PetModel[]): void;
}
