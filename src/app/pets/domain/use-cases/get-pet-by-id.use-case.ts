import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetService } from '../repositories/pet.service';

export class GetPetByIdUseCase implements UseCase<number, PetModel> {
  constructor(private petRepository: PetService) {}

  execute(id: number): Observable<PetModel> {
    return this.petRepository.getPetById(id);
  }
}
