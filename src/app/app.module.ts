import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { AppRoutingModule } from './app.routing.module'

import { HttpClientModule } from '@angular/common/http'; //Importar para a service funcionar
import { PokemonService } from './services/pokemon/pokemon.service'; //Importar para a service funcionar

import { FormsModule } from '@angular/forms';
import { TrainerComponent } from './pages/trainer/trainer.component'; //Importar para ngForm funcionar
import { TrainerService } from './services/trainer/trainer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    TrainerComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule, //Importar para a service funcionar
    FormsModule
  ],
  providers: [
    PokemonService,
    TrainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
