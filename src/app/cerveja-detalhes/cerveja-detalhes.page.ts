import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage{

  nome;
  descricao;

  constructor(private route:ActivatedRoute) { }

  mostrar(){
    const nomeCerveja = this.route.snapshot.params.id;
    const cervejaReal = JSON.parse(localStorage.getItem(nomeCerveja));
    this.nome = cervejaReal.nome;
    this.descricao = cervejaReal.descricao;

  }

  ionViewDidEnter() { 
    this.mostrar();
  }

}
