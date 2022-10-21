import { InjectionToken, NgModule } from '@angular/core';

import { HttpPetService } from './data/http-pet/http-pet.service';
import { PetService } from './domain/repositories/pet.service';
import { PetFacade } from './presentation/facades/pet.facade';
import { ElfPetStore } from './presentation/state/elf-pet.store';
import { PetStore } from './presentation/state/pet.store';

const PET_STORE = new InjectionToken<PetStore>('PetStore');

const PET_REPOSITORY = new InjectionToken<PetService>('PetRepository');

export const PET_FACADE = new InjectionToken<PetFacade>('PetFacade');

@NgModule({
  imports: [],
  providers: [
    { provide: PET_STORE, useClass: ElfPetStore },
    { provide: PET_REPOSITORY, useClass: HttpPetService },
    {
      provide: PET_FACADE,
      useFactory: (petStore: PetStore, petRepository: PetService) =>
        new PetFacade(petStore, petRepository),
      deps: [PET_STORE, PET_REPOSITORY],
    },
  ],
})
export class PetConfigModule {}
