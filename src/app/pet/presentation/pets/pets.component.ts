import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { PetModel } from '../../domain/models/pet.model';
import { GetPetsUseCase } from '../../domain/usecases/get-pets.usecase';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent   {
  pets$: Observable<PetModel[]> = this.getPetsUseCase.execute();

  constructor(private getPetsUseCase: GetPetsUseCase) { }
}
