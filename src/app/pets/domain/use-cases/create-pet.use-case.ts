import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetService } from '../repositories/pet.service';

export class CreatePetUseCase implements UseCase<PetModel, PetModel> {
  constructor(private petRepository: PetService) {}

  execute(pet: PetModel): Observable<PetModel> {
    return this.petRepository.createPet(pet);
  }
}
