import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ElfPetStore } from './state/elf-pet.store';
import { PetFacade } from './services/pet.facade';
import { PetStore } from './state/pet.store';
import { PetViewModel } from './models/pet.view-model';
import { PetRepository } from 'src/app/domain/pet/repositories/pet.repository';
import { HttpPetRepository } from 'src/app/data/pet/http-pet.repository';

@Component({
  standalone: true,
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  imports: [CommonModule],
  providers: [
    PetFacade,
    { provide: PetStore, useClass: ElfPetStore },
    { provide: PetRepository, useClass: HttpPetRepository },
  ],
})
export class PetsComponent {
  pets$: Observable<PetViewModel[]> = this.petFacade.getPets();

  constructor(private petFacade: PetFacade) {}
}
