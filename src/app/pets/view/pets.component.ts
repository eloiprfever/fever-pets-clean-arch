import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PETS_FACADE } from '../pet.di';
import { PetsFacade } from '../presentation/facades/pets.facade';
import { PetViewModel } from '../presentation/facades/pet.view-model';

@Component({
  standalone: true,
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  imports: [CommonModule],
})
export class PetsComponent implements OnInit {
  pets$: Observable<PetViewModel[]> = this.petFacade.getPets();

  constructor(@Inject(PETS_FACADE) private petFacade: PetsFacade) {}

  ngOnInit(): void {
    this.petFacade.fetchPets();
  }
}
