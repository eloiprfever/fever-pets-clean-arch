import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetRepository } from '../repositories/pet.repository';

export class GetPetsUseCase implements UseCase<void, PetModel[]> {
  constructor(private petRepository: PetRepository) {}

  execute(): Observable<PetModel[]> {
    return this.petRepository.getPets();
  }
}
