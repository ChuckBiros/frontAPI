import { Component } from '@angular/core';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent  {

  public plats: Plat[] | undefined;
  public isLoading: boolean;

  constructor(
  ) {
    this._initData();
    this.isLoading = true;
  }

  private async _initData(): Promise<any> {
    try {
      const response = await fetch('http://localhost:3000/plats', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      this.plats = await response.json();
      await this._isAvailable();
    } catch (error) {
      this.plats = [];
    }
  }

  private _isAvailable(): void {
    this.plats?.forEach((plat) => {
      plat.aliments.forEach(async (aliment) => {
        if (!plat.isAvailable) {
          const stock = parseInt((await this._getAliment(aliment.id)).quantite);
          const demande = parseInt(aliment.quantite);
          plat.isAvailable = stock >= demande;
        }
      });
    });
  }

  private async _getAliment(id: String): Promise<any> {
    this.isLoading = true;
    try {
      const response = await fetch('http://localhost:3000/aliments/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
