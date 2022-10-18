import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ElfPetStore } from './state/elf-pet.store';
import { PetFacade } from './services/pet.facade';
import { PET_STORE } from './state/pet.store';
import { PetViewModel } from './models/pet.view-model';
import { HttpPetRepository } from '../data/http-pet.repository';
import { PET_REPOSITORY } from '../domain/repositories/pet.repository';

@Component({
  standalone: true,
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  imports: [CommonModule],
  providers: [
    PetFacade,
    { provide: PET_STORE, useClass: ElfPetStore },
    { provide: PET_REPOSITORY, useClass: HttpPetRepository },
  ],
})
export class PetsComponent implements OnInit {
  pets$: Observable<PetViewModel[]> = this.petFacade.getPets();

  constructor(private petFacade: PetFacade) {}

  ngOnInit(): void {
    this.petFacade.fetchPets();
  }
}
