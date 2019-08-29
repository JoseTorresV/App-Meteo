import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  componenti: Componente[] = [    // mettiamo come tipo l'interface creato sotto la class InizioPage
    {
      icon: 'thermometer',
      name: 'Meteo',
      redirectTo: '/meteo'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {

  icon: string;
  name: string;
  redirectTo: string;

}
