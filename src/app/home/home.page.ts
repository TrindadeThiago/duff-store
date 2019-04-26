import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {
    this.cervejas = [];
  }

  cervejas;

  ngOnInit() {}

  ionViewDidEnter() {

    this.cervejas = [];

    const chavesDisponiveis = sessionStorage.getItem('chaves');

    if(chavesDisponiveis !== null) {
      const chavesSeparadas = chavesDisponiveis.split(';');

      for (let i = 0; i < chavesSeparadas.length; i++) {
        const cerveja = sessionStorage.getItem(chavesSeparadas[i]);

        const cervejaObj = JSON.parse(cerveja);

        this.cervejas.push(cervejaObj);

      }
    }
  }
}
