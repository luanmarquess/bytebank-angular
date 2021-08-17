import { Transferencia } from './models/transferencia.model';
import { Injectable } from '@angular/core';
import { Http2Server, Http2ServerRequest, Http2Session } from 'http2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTranferencia : any = Array;
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient : HttpClient) {
    this.listaDeTranferencia = [];
}

  get transferencias(){
    return this.listaDeTranferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia : any){
    this.hidratar(transferencia);
    this.listaDeTranferencia.push(transferencia);
  }

  private hidratar (transferencia : any) {
    transferencia.data = new Date();
  }

}
