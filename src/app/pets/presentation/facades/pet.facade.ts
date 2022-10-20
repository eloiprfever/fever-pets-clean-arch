import { Inject, Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';

import {
  PetService,
  PET_REPOSITORY,
} from 'src/app/pets/domain/repositories/pet.service';
import { CreatePetUseCase } from 'src/app/pets/domain/use-cases/create-pet.use-case';
import { GetPetByIdUseCase } from 'src/app/pets/domain/use-cases/get-pet-by-id.use-case';
import { GetPetsUseCase } from 'src/app/pets/domain/use-cases/get-pets.use-case';
import { PetViewMapper } from './pet-view.adapter';
import { PetViewModel } from './pet.view-model';
import { PetStore, PET_STORE } from '../state/pet.store';

@Injectable()
export class PetFacade {
  petViewMapper: PetViewMapper = new PetViewMapper();

  private getPetsUseCase: GetPetsUseCase;
  private getPetByIdUseCase: GetPetByIdUseCase;
  private createPetUseCase: CreatePetUseCase;

  constructor(
    @Inject(PET_STORE) private petStore: PetStore,
    @Inject(PET_REPOSITORY) private petRepository: PetService
  ) {
    this.getPetsUseCase = new GetPetsUseCase(petRepository);
    this.getPetByIdUseCase = new GetPetByIdUseCase(petRepository);
    this.createPetUseCase = new CreatePetUseCase(petRepository);
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
