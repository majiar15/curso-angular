import { Component, OnInit } from '@angular/core';
import { DestinosApiClient } from './../../model/destinos-api-client.model';
import { DestinoViaje } from './../../model/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css']
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClient) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.destino = null; // this.destinosApiClient.getById(id);
  }

}