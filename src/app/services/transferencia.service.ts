import { Transferencia } from './models/transferencia.model';
import { Injectable } from '@angular/core';
import{​​​​​​​​HttpClient}​​​​​​​​from'@angular/common/http';
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

  adicionar(transferencia : Transferencia) : Observable<Transferencia>{
    this.hidratar(transferencia);
     return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar (transferencia : any) {
    transferencia.data = new Date();
  }

}
