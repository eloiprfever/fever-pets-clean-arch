import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { PetAdapter } from './pet.adapter';
import { PetResponse } from './pet.response';
import { PetModel } from '../../domain/models/pet.model';
import { PetService } from '../../domain/repositories/pet.service';

@Injectable()
export class HttpPetService implements PetService {
  petMapper = new PetAdapter();

  private API_URL: string =
    'https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';

  constructor(private http: HttpClient) {}

  getPets(): Observable<PetModel[]> {
    return this.http
      .get<PetResponse[]>(this.API_URL)
      .pipe(map((pets) => pets.map((pet) => this.petMapper.mapFrom(pet))));
  }

  getPetById(id: number): Observable<PetModel> {
    return this.http
      .get<PetResponse>(`${this.API_URL}/${id}`)
      .pipe(map((pet) => this.petMapper.mapFrom(pet)));
  }

  createPet(pet: PetModel): Observable<PetModel> {
    return this.http
      .post<PetResponse>(`${this.API_URL}`, { ...this.petMapper.mapTo(pet) })
      .pipe(map((pet) => this.petMapper.mapFrom(pet)));
  }
}
