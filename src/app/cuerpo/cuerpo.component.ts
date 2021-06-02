import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  miLista: Array< string > = []
  estudiante: string = ""
  estilo: string=""
  constructor() { }

  ngOnInit(): void {
  }
  agregarestudiante(){
    if (this.miLista.length < 10){
    this.miLista.push(this.estudiante)
    this.estudiante=""
    }else {
      alert("La lista esta llena")
      this.estudiante=""
    }
    if (this.miLista.length === 5){
      this.estilo = "color"

    }

  }

}
