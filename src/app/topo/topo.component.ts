import { Component, OnInit, NgModule } from '@angular/core';
import { Observable, Observer, Subject, observable, of, empty } from 'rxjs';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../modelos/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  public ofertas2: Oferta[]

  private subjectPesquisa = new Subject<String>()

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: String) => {
        if (termo.trim() === '') {
          this.ofertas2 = null
          return new Observable<Oferta[]>()
        } else {

          return this.ofertaService.getOfertaPorTermo(termo)
        }
      }))

    //Metodo de escuta assinado diretamente pelo template através do | async

    this.ofertas.subscribe(
      (oferta: Oferta[]) => { this.ofertas2 = oferta }
    )

  }

  public termoPesquisa(termoPesquisa: String): void {
    this.subjectPesquisa.next(termoPesquisa)
  }

  public limparPesquisa(): void {
    this.ofertas2 = null
  }


}
