import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';

export class DestinosApiClient {
    destinos: DestinoViaje[];
    current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);
    constructor() {
       this.destinos = [];
    }
    add(d: DestinoViaje): void{
      this.destinos.push(d);
    }
    getAll(): DestinoViaje[]{
      return this.destinos;
    }
    getById(id: string): DestinoViaje{
        // tslint:disable-next-line: only-arrow-functions
        return this.destinos.filter(function(d): any{return d.id.toString() === id; })[0];
    }
    elegir(destino: DestinoViaje): void {
      this.destinos.forEach( x => x.setSelected(false));
      destino.setSelected(true);
      this.current.next(destino);
    }
    suscribeOnChange(fn): void{
      this.current.subscribe(fn);
    }
}
