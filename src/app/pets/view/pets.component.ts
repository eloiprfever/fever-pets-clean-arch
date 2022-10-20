import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpPetService } from '../data/http-pet/http-pet.service';
import { PET_REPOSITORY } from '../domain/repositories/pet.service';
import { PetFacade } from '../presentation/facades/pet.facade';
import { PetViewModel } from '../presentation/facades/pet.view-model';
import { ElfPetStore } from '../presentation/state/elf-pet.store';
import { PET_STORE } from '../presentation/state/pet.store';

@Component({
  standalone: true,
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  imports: [CommonModule],
  providers: [
    PetFacade,
    { provide: PET_STORE, useClass: ElfPetStore },
    { provide: PET_REPOSITORY, useClass: HttpPetService },
  ],
})
export class PetsComponent implements OnInit {
  pets$: Observable<PetViewModel[]> = this.petFacade.getPets();

  constructor(private petFacade: PetFacade) {}

  ngOnInit(): void {
    this.petFacade.fetchPets();
  }
}
