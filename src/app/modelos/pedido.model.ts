import { ItemCarrinho } from './item-carrinho.model';

export class Pedido {

    constructor(
        public id: number,
        public endereco: String,
        public numero: String,
        public complemento: String,
        public formaPagamento: String,
        public itens: ItemCarrinho[]
    ) { }

}