import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Favorite } from '../../models/favourites.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favoriteCountries: Favorite[] = [];
  displayedColumns: string[] = ['flag', 'name', 'region', 'population', 'actions'];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteCountries = this.favoritesService.getFavorites() || [];
  }

  removeFavorite(country: Favorite): void {
    this.favoritesService.removeFavorite(country);
    this.favoriteCountries = this.favoritesService.getFavorites();
  }
}
