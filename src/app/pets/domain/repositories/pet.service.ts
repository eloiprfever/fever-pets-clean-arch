import { Observable } from 'rxjs';

import { PetModel } from '../models/pet.model';

export interface PetService {
  getPets(): Observable<PetModel[]>;
  getPetById(id: number): Observable<PetModel>;
  createPet(pet: PetModel): Observable<PetModel>;
}
