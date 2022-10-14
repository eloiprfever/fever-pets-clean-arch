import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetsModule } from './presentation/pet/pet.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PetsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
