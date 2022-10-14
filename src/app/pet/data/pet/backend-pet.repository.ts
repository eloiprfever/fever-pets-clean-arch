import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { PetModel } from "../../domain/models/pet.model";
import { PetRepository } from "../../domain/repositories/pet.repository";
import { PetMapper } from "./mappers/pet.mapper";
import { PetEntity } from "./entitites/pet.entity";

@Injectable()
export class BackendPetRepository extends PetRepository {
  petMapper = new PetMapper();

  private API_URL: string = "https://my-json-server.typicode.com/Feverup/fever_pets_data/pets";

  constructor(private http: HttpClient) {
    super();
  }

  getPets(): Observable<PetModel[]> {
    return this.http.get<PetEntity[]>(this.API_URL).pipe(
      map(pets => pets.map(pet => this.petMapper.mapFrom(pet)))
    )
  }

  getPetById(id: number): Observable<PetModel> {
    return this.http.get<PetEntity>(`${this.API_URL}/${id}`).pipe(
      map(pet => this.petMapper.mapFrom(pet))
    )
  }

  createPet(pet: PetModel): Observable<PetModel> {
    return this.http.post<PetEntity>(`${this.API_URL}`, {...this.petMapper.mapTo(pet)}).pipe(
      map(pet => this.petMapper.mapFrom(pet))
    )
  }
}
