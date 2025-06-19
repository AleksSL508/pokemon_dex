import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  isLoading = true;
  tipoTexto = '';
  habilidadesTexto = '';
  favoritePokemons: any[] = [];
  isFavorite = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    const savedFavorites = localStorage.getItem('favoritePokemons');
    if (savedFavorites) {
      this.favoritePokemons = JSON.parse(savedFavorites);
    }
  }

  ngOnInit() {
    console.log('🟢 ngOnInit executado');
    this.route.paramMap.subscribe(params => {
      console.log('Parâmetros completos da rota:', params.keys, params.getAll('name'), params.getAll('id'));
      const name = params.get('name') || params.get('id');
      console.log('Nome do Pokémon na rota:', name);

      if (name) {
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe({
          next: (data: any) => {
            this.pokemon = data;
            this.tipoTexto = data.types.map((t: any) => t.type.name).join(', ');
            this.habilidadesTexto = data.abilities.map((a: any) => a.ability.name).join(', ');
            this.checkFavorite();
            this.isLoading = false;
          },
          error: (err) => {
            console.error('Erro ao buscar Pokémon:', err);
            this.isLoading = false;
          },
        });
      } else {
        console.error('Parâmetro "name" ou "id" não encontrado na rota');
        this.isLoading = false;
      }
    });
  }

  toggleFavorite() {
    const pokemonData = { id: this.pokemon.id, name: this.pokemon.name };
    const index = this.favoritePokemons.findIndex(p => p.id === this.pokemon.id);

    if (index === -1) {
      this.favoritePokemons.push(pokemonData);
      this.isFavorite = true;
    } else {
      this.favoritePokemons.splice(index, 1);
      this.isFavorite = false;
    }

    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
  }

  checkFavorite() {
    this.isFavorite = this.favoritePokemons.some(p => p.id === this.pokemon.id);
  }

  goToFavoriteDetails(name: string) {
    this.router.navigate(['/details', name.toLowerCase()]);
  }
}