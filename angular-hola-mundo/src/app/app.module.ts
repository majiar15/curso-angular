import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule as NgRxStoreModule, ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './model/destinos-api-client.model';
import { DestinosViajesState, reducerDestinosViajes, intializeDestinosViajesState, DestinosViajesEffects } from './model/destinos-viajes-state.model';
const routes: Routes = [

  { path: 'home', component: ListaDestinosComponent},
  { path: 'destino', component: DestinoDetalleComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
// begin redux init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};
const reducerInitialState = {
  destinos: intializeDestinosViajesState()
};
// end redux init
@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, {
      initialState: reducerInitialState,
      runtimeChecks:{
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    EffectsModule.forRoot([DestinosViajesEffects])
  ],
  providers: [
    DestinosApiClient
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
