import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetRepository } from '../repositories/pet.repository';

export class GetPetByIdUseCase implements UseCase<number, PetModel> {
  constructor(private petRepository: PetRepository) {}

  execute(id: number): Observable<PetModel> {
    return this.petRepository.getPetById(id);
  }
}
