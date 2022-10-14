import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PetModel } from 'src/app/domain/pet/models/pet.model';
import { PetStore } from './pet.store';

@Injectable()
export class ElfPetStore extends PetStore {
  getPets(): Observable<PetModel[]> {
    throw new Error('Method not implemented.');
  }

  updatePets(pets: PetModel[]): void {
    throw new Error('Method not implemented.');
  }
}
