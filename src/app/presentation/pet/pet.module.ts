import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsComponent } from './pets/pets.component';
import { PetDataModule } from '../../data/pet/pet-data.module';
import { PetFacade } from 'src/app/presentation/pet/state/pet.facade';
import { PetStore } from './state/pet.store';
import { ElfPetStore } from './state/elf-pet.store';

@NgModule({
  declarations: [PetsComponent],
  imports: [CommonModule, PetDataModule],
  providers: [PetFacade, { provide: PetStore, useClass: ElfPetStore }],
  exports: [PetsComponent],
})
export class PetsModule {}
