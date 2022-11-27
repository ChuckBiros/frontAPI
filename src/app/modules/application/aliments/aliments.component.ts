import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aliment } from '../model/Aliment';
import { Plat } from '../model/Plat';
@Component({
  selector: 'app-angular',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css'],
})
export class AlimentComponent {

  public aliments: Aliment[] | undefined;
  public currentAliment: Plat | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this._initData();
    this.currentAliment = undefined;
  }

  public openDetail(id: string, nom: string, type: string, image: string, quantite: string): void {
    this.router.navigate(['detail'], { relativeTo: this.route, state: { 'id': id, 'nom': nom, 'type': type, 'image': image, 'quantite': quantite } });
    window.scrollTo({
      top: 10000,
      left: 100,
      behavior: 'smooth'
    })
  }

  public openAddAliment(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
    window.scrollTo({
      top: 10000,
      left: 100,
      behavior: 'smooth'
    })
  }

  public async delete(id: string) {
    try {
      const response = await fetch('http://localhost:3000/aliments/delete/' + id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });


      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (error) {
    }

    window.location.reload();
  }

  private async _initData(): Promise<any> {
    try {
      const response = await fetch('http://localhost:3000/aliments', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });


      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      this.aliments = await response.json();
    } catch (error) {
      this.aliments = [];
    }
  }
}
