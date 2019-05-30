import { Imagem } from './imagem.model';

export class ItemCarrinho {
    constructor(
        public id: number,
        public img: Imagem,
        public titulo: String,
        public descricao_oferta: String,
        public valor: number,
        public quantidade: number
    ) { }
}
