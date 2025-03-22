import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoriteCountries';

  constructor() {}

  getFavorites(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addFavorite(countryName: string): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(countryName)) {
      favorites.push(countryName);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(countryName: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(name => name !== countryName);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(countryName: string): boolean {
    return this.getFavorites().includes(countryName);
  }
}

