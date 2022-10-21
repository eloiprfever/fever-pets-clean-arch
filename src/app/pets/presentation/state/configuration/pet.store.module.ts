import { InjectionToken, NgModule } from "@angular/core";
import { ElfPetStore } from "../elf-pet.store";
import { PetStore } from "../pet.store";

export const PET_STORE = new InjectionToken<PetStore>('PetStore');

@NgModule({ providers: [{ provide: PET_STORE, useExisting: ElfPetStore }] })
export class PetStoreModule {}
