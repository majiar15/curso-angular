import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../../model/destino-viaje.model';
import { DestinosApiClient } from '../../model/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../../model/destinos-viajes-state.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  @Output() OnItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all: any;
  constructor(public destinosApiClient: DestinosApiClient, private store: Store<AppState>) {
    this.OnItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito)
      .subscribe(data => {
        if (data != null){
          console.log(data);
          this.updates.push('se ha elegido a ' +  data.nombre);
        }
      });
    store.select(state => state.destinos.items).subscribe(items => this.all = items);
  }

  ngOnInit(): void {
  }

  agregado(destino: DestinoViaje): void{
    this.destinosApiClient.add(destino);
    this.OnItemAdded.emit(destino);
  }
  elegido(destino: DestinoViaje): void{
    this.destinosApiClient.elegir(destino);
  }
}
