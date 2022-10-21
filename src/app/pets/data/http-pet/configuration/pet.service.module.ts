import { NgModule, InjectionToken } from "@angular/core";

import { PetService } from "../../../domain/repositories/pet.service";

import { HttpPetService } from "../http-pet.service";


export const PET_SERVICE = new InjectionToken<PetService>('PET_SERVICE');

@NgModule({
  providers: [
    { provide: PET_SERVICE, useExisting: HttpPetService }
  ]
})
export class PetServiceModule {}
