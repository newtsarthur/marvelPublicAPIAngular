import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importando Router
import { MovieService } from '../services/characters.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

interface MarvelCharacter {
  id: number;
  name: string;
  modified: string;
  comics: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  description: string;
  events: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  resourceURI: string;
  series: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: {
    type: string;
    url: string;
  }[];
}

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  characters: MarvelCharacter[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagedCharacters: MarvelCharacter[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getCharacters();
    });
  }

  getCharacters(): void {
    this.isLoading = true;
    this.movieService.getCharacters().subscribe(
      (response: any) => {
        this.isLoading = false;
        if (response) {
          // Filtrar personagens com imagem válida
          this.characters = this.filterValidImages(response.data.results);
          this.setPage(1);
        }
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao carregar personagens';
      }
    );
  }

  // Filtrar personagens com imagem válida
  filterValidImages(characters: MarvelCharacter[]): MarvelCharacter[] {
    return characters.filter(character => 
      character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
  }

  onPageChange(event: number): void {
    this.currentPage = event;
    this.setPage(event);
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedCharacters = this.characters.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
