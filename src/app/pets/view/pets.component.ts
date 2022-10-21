import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PET_FACADE } from '../pet.di';
import { PetFacade } from '../presentation/facades/pet.facade';
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

  constructor(@Inject(PET_FACADE) private petFacade: PetFacade) {}

  ngOnInit(): void {
    this.petFacade.fetchPets();
  }
}
