import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../modelos/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]

})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
      .then((resposta: Oferta[]) => this.ofertas = resposta)    
  }

}
