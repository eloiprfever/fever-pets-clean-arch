import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { HttpPetAdapter } from './http-pet.adapter';
import { HttpPetResponse } from './http-pet.response';
import { PetModel } from '../../domain/models/pet.model';
import { PetService } from '../../domain/repositories/pet.service';

@Injectable({ providedIn: 'root' })
export class HttpPetService implements PetService {
  private petAdapter = new HttpPetAdapter();

  private API_URL: string =
    'https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';

  constructor(private http: HttpClient) {}

  getPets(): Observable<PetModel[]> {
    return this.http
      .get<HttpPetResponse[]>(this.API_URL)
      .pipe(map((pets) => pets.map((pet) => this.petAdapter.mapFrom(pet))));
  }

  getPetById(id: number): Observable<PetModel> {
    return this.http
      .get<HttpPetResponse>(`${this.API_URL}/${id}`)
      .pipe(map((pet) => this.petAdapter.mapFrom(pet)));
  }

  createPet(pet: PetModel): Observable<PetModel> {
    return this.http
      .post<HttpPetResponse>(`${this.API_URL}`, { ...this.petAdapter.mapTo(pet) })
      .pipe(map((pet) => this.petAdapter.mapFrom(pet)));
  }
}
