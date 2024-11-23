import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/characters.service';
import { NgxPaginationModule } from 'ngx-pagination';

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
  standalone: true,
  imports: [NgIf, CommonModule, NgxPaginationModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
})

export class CharactersListComponent implements OnInit {
  characters: MarvelCharacter[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagedCharacters: MarvelCharacter[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.getCharacters();
    });
  }

  getCharacters(): void {
    this.movieService.getCharacters().subscribe((response: any) => {
      if (response) {
        this.characters = response.data.results;
      }
    });
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }
  getValidUrl(url: string): string {
    // Verifica se o URL começa com 'http' ou 'https'
    if (!url.startsWith('http')) {
      // Adiciona o domínio ou prefixo necessário para o URL funcionar corretamente
      return 'https://' + url;
    }
    return url;
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + 80;
    this.pagedCharacters = this.characters.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  pageChanged(event: number): void {
    this.setPage(event);
  }
}
