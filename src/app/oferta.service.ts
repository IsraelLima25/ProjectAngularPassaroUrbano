import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from './modelos/oferta.model';
import { URL_API_OFERTAS } from './app.api';
import { URL_API_COMO_USAR } from './app.api';
import { URL_API_ONDE_FICA } from './app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators'

@Injectable()
export class OfertaService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API_OFERTAS}`)
            .toPromise()
            .then((resposta: Oferta[]) => resposta)
    }

    public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
        return this.http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Oferta[]) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API_OFERTAS}?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta[0])
    }

    public getComoUsarPorId(id: number): Promise<String> {
        return this.http.get(`${URL_API_COMO_USAR}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0].descricao)
    }


    public getOndeFicarPorId(id: number): Promise<String> {
        return this.http.get(`${URL_API_ONDE_FICA}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0].descricao)
    }

    //implementar buscar por termo da pesquisa retornando um observable

    public getOfertaPorTermo(termoBusca: String): Observable<Oferta[]> {

        return this.http.get(`${URL_API_OFERTAS}?descricao_oferta_like=${termoBusca}`)
            .pipe(
                retry(10),
                map((resposta: any) => resposta))
    }
}
