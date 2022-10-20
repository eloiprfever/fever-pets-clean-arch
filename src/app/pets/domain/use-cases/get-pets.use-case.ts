import { Observable } from 'rxjs';

import { UseCase } from 'src/app/base/use-case';
import { PetModel } from '../models/pet.model';
import { PetService } from '../repositories/pet.service';

export class GetPetsUseCase implements UseCase<void, PetModel[]> {
  constructor(private petRepository: PetService) {}

  execute(): Observable<PetModel[]> {
    return this.petRepository.getPets();
  }
}
