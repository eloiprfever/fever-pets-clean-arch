import { Mapper } from 'src/app/base/mapper';
import { PetModel } from 'src/app/pets/domain/models/pet.model';
import { PetResponse } from './pet.response';

export class PetAdapter implements Mapper<PetResponse, PetModel> {
  mapFrom(param: PetResponse): PetModel {
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

  mapTo(param: PetModel): PetResponse {
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
