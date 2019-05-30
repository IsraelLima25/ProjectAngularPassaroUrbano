import { Imagem } from './imagem.model';

export class Oferta {

    constructor(
        public id: number,
        public categoria: String,
        public titulo: String,
        public descricao_oferta: String,
        public anunciante: String,
        public valor: number,
        public destaque: boolean,
        public imagens: Imagem[]

    ) { }


}