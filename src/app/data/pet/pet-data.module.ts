import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PetRepository } from '../../domain/pet/repositories/pet.repository';
import { HttpPetRepository } from './backend-pet.repository';
import { GetPetsUseCase } from '../../domain/pet/usecases/get-pets.usecase';
import { GetPetByIdUseCase } from '../../domain/pet/usecases/get-pet-by-id.usecase';
import { CreatePetUseCase } from 'src/app/domain/pet/usecases/create-pet.usecase';

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

const createPetUseCaseFactory = (petRepository: PetRepository) =>
  new CreatePetUseCase(petRepository);
const createPetUseCaseProvider = {
  provide: CreatePetUseCase,
  useFactory: createPetUseCaseFactory,
  deps: [PetRepository],
};

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: PetRepository, useClass: HttpPetRepository },
    getPetsUseCaseProvider,
    getPetByIdUseCaseProvider,
    createPetUseCaseProvider,
  ],
})
export class PetDataModule {}
