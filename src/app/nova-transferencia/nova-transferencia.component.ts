import { routes } from './../app.routing.module';
import { TransferenciaService } from './../services/transferencia.service';
import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transparencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();


  valor:number = 0;
  destino:number = 0;

  constructor(private service : TransferenciaService, private router: Router){}

  transferir(){
    console.log('Nova transferencia solicitada');
    //console.log("Valor: " + this.valor)
    //console.log("Destino: " +this.destino)
    const valorEmitir : Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    );

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
