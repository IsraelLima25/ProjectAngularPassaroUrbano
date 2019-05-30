import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../modelos/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertaService]

})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria("restaurante")
      .then((resposta: Oferta[]) => this.ofertas = resposta)
  }

}
