import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css']
})

export class ListarPokemonsComponent implements OnInit {

  URL : string = 'http://localhost:8080/api/pokemons'

  listPokemon: Pokemon[] = [];

  constructor( private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(this.URL).subscribe((data : any) => {
      console.log(data);
      this.listPokemon = data;
    });
  }

  title = 'pokemonapp';

}
