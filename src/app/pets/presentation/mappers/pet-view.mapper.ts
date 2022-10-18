import { Mapper } from 'src/app/base/mapper';
import { PetModel } from 'src/app/pets/domain/models/pet.model';
import { PetViewModel } from '../models/pet.view-model';

export class PetViewMapper implements Mapper<PetModel, PetViewModel> {
  mapFrom(param: PetModel): PetViewModel {
    return {
      id: param.id,
      name: param.name,
      kind: param.kind,
      weight: param.weight,
      height: param.height,
      length: param.length,
      imgUrl: param.photoUrl,
      description: param.description,
      numberOfLives: param.numberOfLives,
    };
  }

  mapTo(param: PetViewModel): PetModel {
    return {
      id: param.id,
      name: param.name,
      kind: param.kind,
      weight: param.weight,
      height: param.height,
      length: param.length,
      photoUrl: param.imgUrl,
      description: param.description,
      numberOfLives: param.numberOfLives,
    };
  }
}
