import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { PetModel } from 'src/app/domain/pet/models/pet.model';
import { CreatePetUseCase } from 'src/app/domain/pet/usecases/create-pet.usecase';
import { GetPetByIdUseCase } from 'src/app/domain/pet/usecases/get-pet-by-id.usecase';
import { GetPetsUseCase } from 'src/app/domain/pet/usecases/get-pets.usecase';
import { PetStore } from './pet.store';

@Injectable()
export class PetFacade {
  constructor(
    private petStore: PetStore,
    private getPetsUseCase: GetPetsUseCase,
    private getPetByIdUseCase: GetPetByIdUseCase,
    private createPetUseCase: CreatePetUseCase
  ) {}

  fetchPets(): Observable<PetModel[]> {
    return this.getPetsUseCase
      .execute()
      .pipe(tap((pets) => this.petStore.updatePets(pets)));
  }

  getPets(): Observable<PetModel[]> {
    return this.petStore.getPets();
  }

  getPetById(id: number): Observable<PetModel> {
    return this.getPetByIdUseCase.execute(id);
  }

  createPet(pet: PetModel): Observable<PetModel> {
    return this.createPetUseCase.execute(pet);
  }
}
