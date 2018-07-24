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

import { GinasioComponent } from './pages/ginasio/ginasio.component';
import { FormsModule } from '@angular/forms'; //Importar para ngForm funcionar

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    GinasioComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule, //Importar para a service funcionar
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
