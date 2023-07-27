import { Component } from '@angular/core';
import {caract_pokemons} from "../modeles/caract_pokemons";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  public message: string;
  public message2: string;
  public pokemons: caract_pokemons[];

  constructor() {
    this.message = "Les six premiers Pokémons";
    this.message2 = "Dans l'ordre du Pokedex";
    this.pokemons = [];
    this.pokemons.push(new caract_pokemons("001", "Bulbizarre", ["plante", "poison"], "70 centimètres", "6.9 kilogrammes"));
    this.pokemons.push(new caract_pokemons("002", "Herbizzare", ["plante", "poison"], "1 mètres", "13 kilogrammes"));
    this.pokemons.push(new caract_pokemons("003", "Florizarre", ["plante", "poison"], "2 mètres", "100 kilogrammes"));
    this.pokemons.push(new caract_pokemons("004", "Salamèche", ["feu"], "60 centimètres", "8.5 kilogrammes"));
    this.pokemons.push(new caract_pokemons("005", "Reptincel", ["feu"], "1.1 mètres", "19 kilogrammes"));
    this.pokemons.push(new caract_pokemons("006", "Dracaufeu", ["feu", "vol"], "1.7 mètres", "90.5 kilogrammes"));
  }

}
