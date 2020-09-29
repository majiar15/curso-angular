import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {

    constructor(private store: Store<AppState>) {
    }
    add(destino: DestinoViaje): void{
      this.store.dispatch(new NuevoDestinoAction(destino));
    }
    elegir(destino: DestinoViaje): void {
      this.store.dispatch(new ElegidoFavoritoAction(destino));
    }
}
