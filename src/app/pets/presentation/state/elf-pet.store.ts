import { createStore, select, withProps } from '@ngneat/elf';
import { Observable } from 'rxjs';

import { PetModel } from '../../domain/models/pet.model';
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

export class ElfPetStore implements PetStore {
  getPets(): Observable<PetModel[]> {
    return petStore.pipe(select((state) => state.pets));
  }

  updatePets(pets: PetModel[]): void {
    petStore.update((state) => ({ ...state, pets }));
  }
}
