import { Injectable } from '@angular/core';

import { createStore, select, withProps } from '@ngneat/elf';
import { Observable } from 'rxjs';

import { PetModel } from 'src/app/domain/pet/models/pet.model';
import { PetStore } from './pet.store';

interface PetProps {
  pets: PetModel[];
}

const petStore = createStore(
  { name: 'petStore' },
  withProps<PetProps>({
    pets: [],
  })
);

@Injectable()
export class ElfPetStore extends PetStore {
  getPets(): Observable<PetModel[]> {
    return petStore.pipe(select((state) => state.pets));
  }

  updatePets(pets: PetModel[]): void {
    petStore.update((state) => ({ ...state, pets }));
  }
}
