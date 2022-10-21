import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PetsFacade } from '../presentation/facades/pets.facade';
import { PetViewModel } from '../presentation/facades/pet.view-model';

import { PetsFacadeModule, PETS_FACADE } from '../presentation/facades/configuration/pet.facade.module';

@Component({
  standalone: true,
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  imports: [CommonModule, PetsFacadeModule]
})
export class PetsComponent implements OnInit {
  pets$: Observable<PetViewModel[]> = this.petFacade.getPets();

  constructor(@Inject(PETS_FACADE) private petFacade: PetsFacade) {}

  ngOnInit(): void {
    this.petFacade.fetchPets();
  }
}
