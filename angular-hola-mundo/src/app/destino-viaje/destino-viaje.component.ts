import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../model/destino-viaje.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { VoteUpAction, VoteDownAction } from '../model/destinos-viajes-state.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input() posicion: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor(private sotre: Store<AppState>) {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }
  ir(): boolean{
    this.clicked.emit(this.destino);
    return false;
  }
  voteUp(): boolean{
    this.sotre.dispatch( new VoteUpAction(this.destino));
    return false;
  }
  voteDown(): boolean{
    this.sotre.dispatch( new VoteDownAction(this.destino));
    return false;
  }
}
