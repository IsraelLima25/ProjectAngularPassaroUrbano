import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/oferta.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertaService]
})
export class ComoUsarComponent implements OnInit {

  public descricao: String = ''

  constructor(private ofertaService: OfertaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe((parametro: Params) =>
      this.ofertaService.getComoUsarPorId(parametro.id)
        .then((resposta: String) => this.descricao = resposta)
    )


  }

}
