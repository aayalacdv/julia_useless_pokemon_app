import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-voting-screen',
  templateUrl: './voting-screen.component.html',
  styleUrls: ['./voting-screen.component.css']
})
export class VotingScreenComponent implements OnInit {

  URL : string = 'http://localhost:8080/api/random'

  constructor( private http: HttpClient){}

  ngOnInit(): void {
    console.log("on init ");
    //llamar al backaend
    //meter los datos de dos pokemons random en el array de pokemons
    this.http.get(this.URL).subscribe((data : any) => {
      const pokemon1 : Pokemon = data.pokemon1 as Pokemon;
      const pokemon2 : Pokemon = data.pokemon2 as Pokemon;

      this.pokemons = [pokemon1, pokemon2];

    });

  }

  charmander : Pokemon = {
    name: "Charmander",
    votes: 0,
    imgUrl :"../assets/images/charmander.png"
  }

  pikachu: Pokemon = {
    name: "Pikachu",
    votes: 0,
    imgUrl :"../assets/images/pikachu.png"
  }

  pokemons : Pokemon[] = [];

  title = 'pokemonapp';

  clickHandler (name : string) {
    this.pokemons.forEach((pokemon: Pokemon) => {
      if(pokemon.name === name ) {
        pokemon.votes++; }
        console.log(`${pokemon.name} vote count = ${pokemon.votes}`);
    });
  }

}
