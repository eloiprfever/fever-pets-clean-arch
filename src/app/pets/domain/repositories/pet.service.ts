import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PetModel } from '../models/pet.model';

export const PET_REPOSITORY = new InjectionToken<PetService>('PetRepository');

export interface PetService {
  getPets(): Observable<PetModel[]>;
  getPetById(id: number): Observable<PetModel>;
  createPet(pet: PetModel): Observable<PetModel>;
}
