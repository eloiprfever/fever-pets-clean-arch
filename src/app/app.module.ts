import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/presentation/pets.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PetsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
