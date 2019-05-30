
import { Pedido } from './modelos/pedido.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API_OFERTAS, URL_API_ONDE_PEDIDO } from './app.api';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: Pedido): Observable<Pedido> {

        let headers: HttpHeaders = new HttpHeaders()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API_ONDE_PEDIDO}`,
            pedido,
            { headers: headers }
        )
            .pipe(map((resposta: Pedido) => resposta))

    }

}