import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  totalPokemons = 0;
  currentPage = 1;
  totalPages = 1;
  pageNumbers: number[] = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe({
      next: (res) => {
        this.totalPokemons = res.count;
        this.totalPages = Math.ceil(this.totalPokemons / this.limit);
        this.updatePageNumbers();
        const requests = res.results.map((p: any) => this.pokemonService.getPokemonDetails(p.name));
        Promise.all(requests.map((r: any) => r.toPromise())).then(data => {
          this.pokemons = data;
          console.log('Pokémon carregados:', this.pokemons.length, 'Página:', this.currentPage);
        }).catch(err => {
          console.error('Erro ao carregar detalhes:', err);
        });
      },
      error: (err) => {
        console.error('Erro ao buscar Pokémon:', err);
      }
    });
  }

  updatePageNumbers() {
    const maxPagesToShow = 15;
    const halfRange = Math.floor(maxPagesToShow / 2);
    let startPage = this.currentPage - halfRange;
    let endPage = this.currentPage + halfRange;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(maxPagesToShow, this.totalPages);
    }
    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    this.pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.offset = (page - 1) * this.limit;
    this.loadPokemons();
    this.updatePageNumbers();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.offset -= this.limit;
      this.loadPokemons();
      this.updatePageNumbers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.offset += this.limit;
      this.loadPokemons();
      this.updatePageNumbers();
    }
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}