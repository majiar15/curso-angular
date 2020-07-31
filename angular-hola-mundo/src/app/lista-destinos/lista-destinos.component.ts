import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from "../model/destino-viaje.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[] = [];
  constructor() {
    
   }

  ngOnInit(): void {
  }

  guardar(nombre:String, url:String) : Boolean {
    this.destinos.push(new DestinoViaje(nombre,url));
    return false;
  }
}
