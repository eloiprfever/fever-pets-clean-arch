import { Mapper } from 'src/app/base/mapper';
import { PetModel } from 'src/app/domain/pet/models/pet.model';
import { PetEntity } from '../entitites/pet.entity';

export class PetMapper implements Mapper<PetEntity, PetModel> {
  mapFrom(param: PetEntity): PetModel {
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

  mapTo(param: PetModel): PetEntity {
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
