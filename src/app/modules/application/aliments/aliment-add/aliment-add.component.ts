import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-angular',
  templateUrl: './aliment-add.component.html',
  styleUrls: ['./aliment-add.component.css'],
})
export class AlimentAddComponent {

  public state: {
    id: string;
    nom: string;
    type: string;
    image: string;
    quantite: string;
  };
  constructor(private router: Router) {
    this.state = {
      id: "",
      nom: "",
      type: "",
      image: "",
      quantite: "",
    };
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

      axios.post('http://localhost:3000/aliments/create', {
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
