import { Component, OnInit } from '@angular/core';
import { Pedido } from '../modelos/pedido.model'
import { OrdemCompraService } from '../ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ItemCarrinho } from '../modelos/item-carrinho.model';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido

  public itensCarrinho: ItemCarrinho[]

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, Validators.required)
  })
  constructor(private ordemCompraService: OrdemCompraService, private router: Router,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    //this.router.navigate(['/','restaurantes'])
    this.itensCarrinho = this.carrinhoService.getItensCarrinho()
  }

  public confirmarCompra(): void {

    if (this.formulario.status === "INVALID") {
      this.formulario.get('endereco').markAsTouched(),
        this.formulario.get('numero').markAsTouched(),
        this.formulario.get('complemento').markAsTouched(),
        this.formulario.get('formaPagamento').markAsTouched()
    } else {
      let pedido: Pedido = new Pedido(
        null,
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.getItensCarrinho()
      )

      this.ordemCompraService.efetivarCompra(pedido).subscribe(
        (pedido: Pedido) => {
        this.pedido = pedido
          this.carrinhoService.limparCarrinho()
        }
      )
    }
  }

  public diminuirQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidadeItemCarrinho(item)
  }

  public aumentarQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.aumentarQuantidadeItemCarrinho(item)
  }
}
