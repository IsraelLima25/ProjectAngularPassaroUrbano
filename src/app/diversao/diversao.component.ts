import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../modelos/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria("diversao")
      .then((resposta: Oferta[]) => this.ofertas = resposta)
  }
}
