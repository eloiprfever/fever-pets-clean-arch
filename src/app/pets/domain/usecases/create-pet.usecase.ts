import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetRepository } from '../repositories/pet.repository';

export class CreatePetUseCase implements UseCase<PetModel, PetModel> {
  constructor(private petRepository: PetRepository) {}

  execute(pet: PetModel): Observable<PetModel> {
    return this.petRepository.createPet(pet);
  }
}
