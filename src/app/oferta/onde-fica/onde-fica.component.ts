import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/oferta.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertaService]
})
export class OndeFicaComponent implements OnInit {

  public descricao: String = ''

  constructor(private ofertaService: OfertaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(
      (parametro: Params) => {
        this.ofertaService.getOndeFicarPorId(parametro.id)
          .then((resposta: String) => this.descricao = resposta)
      }
    )




  }

}
