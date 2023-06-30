import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  @Input() titulo = "Tabela de Produtos X";
  nomePesquisado?: string;
  listaProdutos: Produto[];

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = this.produtoService.listar(); 
  }

  deletar(id?: number) {
    this.produtoService.deletar(id);
  }

}
