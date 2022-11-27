import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-angular',
  templateUrl: './aliment-detail.component.html',
  styleUrls: ['./aliment-detail.component.css'],
})
export class AlimentDetailComponent {
  public userName: any;
  public state: {
    id: string,
    nom: string,
    type: string,
    image: string,
    quantite: string
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state as {
      id: string,
      nom: string,
      type: string,
      image: string,
      quantite: string
    };

    if (!this.state) {
      this.router.navigate(['aliments']);
    }
  }

  public cancel(): void {
    this.router.navigate(['aliments']);
  }

  public valueNamechange(event: any) {
    this.state.nom = event.target.value;
  }

  public valueTypechange(event: any) {
    this.state.type = event.target.value;
  }

  public valueQuantitychange(event: any) {
    this.state.quantite = event.target.value;
  }

  public async submit() {
    try {
      axios.put('http://localhost:3000/aliments/update/' + this.state.id, {
        nom: this.state.nom,
        type: this.state.type,
        quantite: this.state.quantite,
        image: this.state.image
      });

    } catch (error) {
    }

    window.location.reload();
  }
}
