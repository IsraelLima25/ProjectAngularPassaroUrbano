import { Oferta } from './modelos/oferta.model';
import { ItemCarrinho } from './modelos/item-carrinho.model';

export class CarrinhoService {

    public carrinho: ItemCarrinho[] = []

    public getItensCarrinho(): ItemCarrinho[] {
        return this.carrinho
    }

    public adicionarItemCarrinho(oferta: Oferta): void {

        let item: ItemCarrinho = new ItemCarrinho(oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor, 1)

        let itemCarrinhoEncontrado = this.carrinho.find((itemCarrinho: ItemCarrinho) => itemCarrinho.id === item.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.carrinho.push(item)
        }
    }

    public aumentarQuantidadeItemCarrinho(itemCarrinho: ItemCarrinho): void {
        //incrementar quantidade
        let itemCarrinhoEncontrado = this.carrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        }
    }

    public diminuirQuantidadeItemCarrinho(itemCarrinho: ItemCarrinho): void {
        //decrementar quantidade
        let itemCarrinhoEncontrado = this.carrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            if (itemCarrinhoEncontrado.quantidade > 1) {
                itemCarrinhoEncontrado.quantidade -= 1
            } else {
                this.carrinho.splice(this.carrinho.indexOf(itemCarrinhoEncontrado), 1)
            }
        }
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0
        this.carrinho.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })
        return total
    }

    public limparCarrinho(): void {
        this.carrinho = []
    }

}