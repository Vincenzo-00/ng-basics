import { Component } from '@angular/core';
import { VoceMenu } from '../models/voce-menu';

@Component({
  selector: 'app-intestazione',
  templateUrl: './intestazione.component.html',
  styleUrl: './intestazione.component.css',
})
export class IntestazioneComponent {
  // links è la PROPRIETA' DELL'OGGETTO CHE VIENE INSTANZIATO DA IntestazioneComponent

  vociMenu: VoceMenu[] = [
    {
      titolo: 'Chi siamo',
      url: 'https://google.com',
    },
    {
      titolo: 'Contatti',
      url: 'https://instagram.com',
    },
    {
      titolo: 'Assistenza',
      url: 'https://ferrari.com',
    },
    {
      titolo: 'Lavora per noi',
      url: 'https://amazon.com',
    },
  ];

  utenteLoggato = false;
}
