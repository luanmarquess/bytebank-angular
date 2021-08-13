import { style } from '@angular/animations';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transparencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();


  valor:number = 0;
  destino:number = 0;

  transferir(){
    console.log('Nova transferencia solicitada');
    //console.log("Valor: " + this.valor)
    //console.log("Destino: " +this.destino)
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTranferir.emit(valorEmitir);
    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
