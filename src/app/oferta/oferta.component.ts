import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../modelos/oferta.model';
import { OfertaService } from '../oferta.service';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta


  constructor(private activatedRoute: ActivatedRoute, private ofertaService: OfertaService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramentros: Params) => {
      this.ofertaService.getOfertasPorId(paramentros.id)
        .then((resposta: Oferta) => this.oferta = resposta)
    })
  }

  public enviarItemCarrinho(oferta: Oferta): void {

    this.carrinhoService.adicionarItemCarrinho(oferta)

    alert('Parabéns!! Mais um item adicionado ao seu carrinho.')

  }

}
