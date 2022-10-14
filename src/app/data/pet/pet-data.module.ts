import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PetRepository } from '../../domain/pet/repositories/pet.repository';
import { BackendPetRepository } from './backend-pet.repository';
import { GetPetsUseCase } from '../../domain/pet/usecases/get-pets.usecase';
import { GetPetByIdUseCase } from '../../domain/pet/usecases/get-pet-by-id.usecase';

const getPetsUseCaseFactory = (petRepository: PetRepository) =>
  new GetPetsUseCase(petRepository);
const getPetsUseCaseProvider = {
  provide: GetPetsUseCase,
  useFactory: getPetsUseCaseFactory,
  deps: [PetRepository],
};

const getPetByIdUseCaseFactory = (petRepository: PetRepository) =>
  new GetPetByIdUseCase(petRepository);
const getPetByIdUseCaseProvider = {
  provide: GetPetByIdUseCase,
  useFactory: getPetByIdUseCaseFactory,
  deps: [PetRepository],
};

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: PetRepository, useClass: BackendPetRepository },
    getPetsUseCaseProvider,
    getPetByIdUseCaseProvider,
  ],
})
export class PetDataModule {}
