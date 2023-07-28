import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {

  public message1: string;
  public message2: string;
  public generations: String[];

  constructor(
    private http: HttpClient
  ) {
    this.message1 = 'Générations de Pokémons :';
    this.message2 = 'LES DIFFÉRRENTES GÉNÉRATIONS :';
    this.generations = [];

    //  Utilisation sans API
    //   this.generations = [];
    //   this.generations.push('Generation I');
    //   this.generations.push('Generation II');
    //   this.generations.push('Generation III');
    //   this.generations.push('Generation IV');
    //   this.generations.push('Generation V');
    //   this.generations.push('Generation VI');
    //   this.generations.push('Generation VII');
    //   this.generations.push('Generation VIII');
    // }
  }
}
