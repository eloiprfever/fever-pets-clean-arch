import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';

import { PetModel } from 'src/app/domain/pet/models/pet.model';
import { PetRepository } from 'src/app/domain/pet/repositories/pet.repository';
import { CreatePetUseCase } from 'src/app/domain/pet/usecases/create-pet.usecase';
import { GetPetByIdUseCase } from 'src/app/domain/pet/usecases/get-pet-by-id.usecase';
import { GetPetsUseCase } from 'src/app/domain/pet/usecases/get-pets.usecase';
import { PetViewMapper } from '../mappers/pet-view.mapper';
import { PetViewModel } from '../models/pet.view-model';
import { PetStore } from '../state/pet.store';

@Injectable()
export class PetFacade {
  petViewMapper: PetViewMapper = new PetViewMapper();

  private getPetsUseCase: GetPetsUseCase;
  private getPetByIdUseCase: GetPetByIdUseCase;
  private createPetUseCase: CreatePetUseCase;

  constructor(
    private petStore: PetStore,
    private petRepository: PetRepository
  ) {
    this.getPetsUseCase = new GetPetsUseCase(petRepository);
    this.getPetByIdUseCase = new GetPetByIdUseCase(petRepository);
    this.createPetUseCase = new CreatePetUseCase(petRepository);
    this.fetchPets();
  }

  fetchPets(): void {
    this.getPetsUseCase
      .execute()
      .pipe(tap((pets) => this.petStore.updatePets(pets)))
      .subscribe();
  }

  getPets(): Observable<PetViewModel[]> {
    return this.petStore
      .getPets()
      .pipe(map((pets) => pets.map(this.petViewMapper.mapFrom)));
  }

  getPetById(id: number): Observable<PetViewModel> {
    return this.getPetByIdUseCase
      .execute(id)
      .pipe(map(this.petViewMapper.mapFrom));
  }

  createPet(pet: PetViewModel): Observable<PetViewModel> {
    return this.createPetUseCase
      .execute(this.petViewMapper.mapTo(pet))
      .pipe(map(this.petViewMapper.mapFrom));
  }
}
