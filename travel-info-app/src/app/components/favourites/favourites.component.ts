import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favoriteCountries: string[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteCountries = this.favoritesService.getFavorites();
  }

  removeFavorite(countryName: string): void {
    this.favoritesService.removeFavorite(countryName);
    this.favoriteCountries = this.favoritesService.getFavorites();
  }
}
