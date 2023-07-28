import { Component } from '@angular/core';
import {Pokemon} from "../modeles/pokemons";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MonInterfaceJson} from "../modeles/monInterfaceJson";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  public message: string;
  public message2: string;
  public pokemons$: Observable<MonInterfaceJson>;

  // Injection de dépendance de HttpClient pour utilisation de l'API
  constructor(private http: HttpClient) {
    this.pokemons$ = this.http.get<MonInterfaceJson>("https://pokeapi.co/api/v2/pokemon/250");
    this.message = "Les six premiers Pokémons";
    this.message2 = "Dans l'ordre du Pokedex";

    // Utilisation sans API
    // this.pokemons = [];
    // this.pokemons.push(new pokemons("001", "Bulbizarre", ["plante", "poison"], 70, 6.9, "/img/bulbizarre.png"));
    // this.pokemons.push(new pokemons("002", "Herbizzare", ["plante", "poison"], 1, 13, "image2"));
    // this.pokemons.push(new pokemons("003", "Florizarre", ["plante", "poison"], 2, 100, "image3"));
    // this.pokemons.push(new pokemons("004", "Salamèche", ["feu"], 60, 8.5, "image4"));
    // this.pokemons.push(new pokemons("005", "Reptincel", ["feu"], 1.1, 19, "image5"));
    // this.pokemons.push(new pokemons("006", "Dracaufeu", ["feu", "vol"], 1.7, 90.5,"image6"));
  }
}
