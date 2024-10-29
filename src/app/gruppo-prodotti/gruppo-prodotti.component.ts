import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-gruppo-prodotti',
  templateUrl: './gruppo-prodotti.component.html',
  styleUrl: './gruppo-prodotti.component.css'
})

export class GruppoProdottiComponent {

  titolo: string = "Oggi in sconto!!!";

  prodotti: Prodotto[] = [

    {

      nome: "Bici",
      desc: "Nera",
      prezzo: 100,
      foto: "https://picsum.photos/100/200"

    },
    {

      nome: "Frigittrice",
      desc: "Ad aria",
      prezzo: 80,
      foto: "https://picsum.photos/100/200"

    }

  ]

}
