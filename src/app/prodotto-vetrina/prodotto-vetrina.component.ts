import { Component, Input } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-prodotto-vetrina',
  templateUrl: './prodotto-vetrina.component.html',
  styleUrl: './prodotto-vetrina.component.css'
})
export class ProdottoVetrinaComponent {

  @Input()
  prodotto: Prodotto = {

    nome: "test",
    desc: "test",
    prezzo: 0,
    foto: "test",

  }

}
