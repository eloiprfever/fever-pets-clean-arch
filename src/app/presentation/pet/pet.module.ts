import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsComponent } from './pets/pets.component';
import { PetDataModule } from '../../data/pet/pet-data.module';

@NgModule({
  declarations: [PetsComponent],
  imports: [CommonModule, PetDataModule],
  exports: [PetsComponent],
})
export class PetsModule {}
