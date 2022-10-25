import { inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpPetService } from './data/http-pet/http-pet.service';
import { PetService } from './domain/repositories/pet.service';
import { PetsFacade } from './presentation/facades/pets.facade';
import { ElfPetStore } from './presentation/state/elf-pet.store';
import { PetStore } from './presentation/state/pet.store';

const PET_STORE = new InjectionToken<PetStore>('PetStore', {
  factory: () => new ElfPetStore(),
});

const PET_REPOSITORY = new InjectionToken<PetService>('PetRepository', {
  factory: () => new HttpPetService(inject(HttpClient)),
});

export const PETS_FACADE = new InjectionToken<PetsFacade>('PetFacade', {
  factory: () => new PetsFacade(inject(PET_STORE), inject(PET_REPOSITORY)),
});
