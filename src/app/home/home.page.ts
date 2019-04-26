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

  excluir(nome) {
    localStorage.removeItem(nome);
  }

  ionViewDidEnter() {

    this.cervejas = [];

    const tamanhoDB = localStorage.length;

    for (let index = 0; index < tamanhoDB.length; index++) {
      const key = localStorage.key(index);
      const cerveja = localStorage.getItem(key);
      const cervejaReal = JSON.parse(cerveja);

    }
  }
}
