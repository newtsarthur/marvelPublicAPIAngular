import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics.service';
import { CommonModule } from "@angular/common";
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

interface Comic {
  digitalPurchasePrice: string | number
  printPrice: string | number
  onsaleDate: string
  id: number;
  digitalId: number;
  title: string;
  characters: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  collectedIssues: any[];
  collections: any[];
  creators: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  dates: {
    type: string;
    date: string;
  }[];
  description: string;
  diamondCode: string;
  ean: string;
  events: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  format: string;
  pageCount: number;
  prices: {
    type: string;
    price: number;
  }[];
  resourceURI: string;
  series: {
    resourceURI: string;
    name: string;
  };
  stories: {
    available: number;
    collectionURI: string;
    returned: number;
  };
  textObjects: any[];
  thumbnail: {
    path: string;
    extension: string;
  };
  upc: string;
  urls: {
    type: string;
    url: string;
  }[];
  variantDescription: string;
  variants: any[];
}


@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, CommonModule],
  styleUrls: ['./comics-list.component.css'],
})
export class ComicsListComponent implements OnInit {
  pagedComics: Comic[] = [];
  comics: Comic[] = [];
  currentPage: number = 1
  itemsPerPage: number = 20;
  totalItems: number = 0;

  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.comicsService.getComics().subscribe((response: any) => {
      if (response && response.data.results) {
        console.log(response.data)
        this.comics = response.data.results;
        this.totalItems = this.comics.length;
        this.setPage(1);
      }
    });
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + 80;
    this.pagedComics = this.comics.slice(startIndex, endIndex);
    this.currentPage = page;


    this.pagedComics.forEach(comic => {
      const onsaleDate = comic.dates.find(date => date.type === 'focDate');
      comic.onsaleDate = onsaleDate ? onsaleDate.date : 'N/A';

      const printPrice = comic.prices.find(price => price.type === 'printPrice');
      comic.printPrice = printPrice ? printPrice.price : 'N/A';

      const digitalPurchasePrice = comic.prices.find(price => price.type === 'digitalPurchasePrice');
      comic.digitalPurchasePrice = digitalPurchasePrice ? digitalPurchasePrice.price : 'N/A';
    });
  }



  pageChanged(event: number): void {
    this.setPage(event);
  }
}
