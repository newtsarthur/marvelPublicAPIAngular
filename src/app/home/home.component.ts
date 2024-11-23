import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ZoomDirective } from '../zoom.directive';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ZoomDirective, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToComicsList(): void {
    this.router.navigate(['/comicsList']);
  }

  navigateToCharactersList(): void {
    this.router.navigate(['/charactersList']);
  }

  ngOnInit(): void {}
}
