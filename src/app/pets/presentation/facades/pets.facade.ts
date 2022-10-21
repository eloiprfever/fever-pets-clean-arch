import { map, Observable, tap } from 'rxjs';

import { PetService } from '../../domain/repositories/pet.service';
import { CreatePetUseCase } from '../../domain/use-cases/create-pet.use-case';
import { GetPetByIdUseCase } from '../../domain/use-cases/get-pet-by-id.use-case';
import { GetPetsUseCase } from '../../domain/use-cases/get-pets.use-case';

import { PetStore } from '../state/pet.store';

import { PetViewMapper } from './pet-view.adapter';
import { PetViewModel } from './pet.view-model';

export class PetsFacade {
  petViewMapper: PetViewMapper = new PetViewMapper();

  private getPetsUseCase: GetPetsUseCase;
  private getPetByIdUseCase: GetPetByIdUseCase;
  private createPetUseCase: CreatePetUseCase;

  constructor(
    petService: PetService,
    private petStore: PetStore
  ) {
    this.getPetsUseCase = new GetPetsUseCase(petService);
    this.getPetByIdUseCase = new GetPetByIdUseCase(petService);
    this.createPetUseCase = new CreatePetUseCase(petService);
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
