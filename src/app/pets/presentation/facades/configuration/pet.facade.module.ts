import { InjectionToken, NgModule } from "@angular/core";

import { PetService } from "../../../domain/repositories/pet.service";
import { PetStore } from "../../state/pet.store";
import { PetsFacade } from "../pets.facade";

import { PetServiceModule, PET_SERVICE } from "../../../data/http-pet/configuration/pet.service.module";
import { PetStoreModule, PET_STORE } from "../../state/configuration/pet.store.module";



export const PETS_FACADE = new InjectionToken<PetsFacade>('PETS_FACADE');

@NgModule({
  imports: [PetStoreModule, PetServiceModule],
  providers: [
    {
      provide: PETS_FACADE,
      useFactory: (petService: PetService, petStore: PetStore) => new PetsFacade(petService, petStore),
      deps: [PET_SERVICE, PET_STORE]
    }
  ]
})
export class PetsFacadeModule {}
