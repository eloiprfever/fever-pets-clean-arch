import { Mapper } from 'src/app/base/mapper';
import { PetModel } from 'src/app/pets/domain/models/pet.model';
import { HttpPetResponse } from './http-pet.response';

export class HttpPetAdapter implements Mapper<HttpPetResponse, PetModel> {
  mapFrom(param: HttpPetResponse): PetModel {
    return {
      id: param.id,
      name: param.name,
      kind: param.kind,
      weight: param.weight,
      height: param.height,
      length: param.length,
      photoUrl: param.photo_url,
      description: param.description,
      numberOfLives: param.number_of_lives,
    };
  }

  mapTo(param: PetModel): HttpPetResponse {
    return {
      id: param.id,
      name: param.name,
      kind: param.kind,
      weight: param.weight,
      height: param.height,
      length: param.length,
      photo_url: param.photoUrl,
      description: param.description,
      number_of_lives: param.numberOfLives,
    };
  }
}
