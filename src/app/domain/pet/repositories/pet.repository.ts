import { Observable } from 'rxjs';

import { PetModel } from '../models/pet.model';

export abstract class PetRepository {
  abstract getPets(): Observable<PetModel[]>;
  abstract getPetById(id: number): Observable<PetModel>;
  abstract createPet(pet: PetModel): Observable<PetModel>;
}
