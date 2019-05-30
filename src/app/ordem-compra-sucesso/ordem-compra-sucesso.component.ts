import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../modelos/pedido.model';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public pedidoEfetivado: Pedido

  constructor() { }

  ngOnInit() {
  }

}
