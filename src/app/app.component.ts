import { Component } from '@angular/core';
import { Prodotto } from './models/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-basics';

  prodotti: Prodotto[] = [
    {
      nome: 'Bici',
      desc: 'Nera',
      prezzo: 100,
      foto: 'https://picsum.photos/100/200',
    },
    {
      nome: 'Frigittrice',
      desc: 'Ad aria',
      prezzo: 80,
      foto: 'https://picsum.photos/100/200',
    },
  ];

  prodottiFestaDellaDonna: Prodotto[] = [
    {
      nome: 'Scarpe',
      desc: 'Nere',
      prezzo: 150,
      foto: 'https://picsum.photos/100/200',
    },
    {
      nome: 'Borsa',
      desc: 'Louis Vuitton',
      prezzo: 800,
      foto: 'https://picsum.photos/100/200',
    },
  ];
}
