import { Injectable } from '@angular/core';
import { Favorite } from '../../models/favourites.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoriteCountries';

  constructor() {}

  getFavorites(): Favorite[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }
  

  addFavorite(country: Favorite): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.countryName === country.countryName)) {
      favorites.push(country);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }
  

  removeFavorite(countryName: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.countryName !== countryName);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(countryName: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.countryName === countryName);
  }
}

