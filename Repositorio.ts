/*
🔧 Desafio –  de Produtos e Filtro por Categoria
🎯 Objetivo:
Criar um sistema que simula um catálogo de produtos, onde:

Cada produto tem um nome, preço e categoria.

Você poderá adicionar produtos.

E filtrar os produtos por categoria ou por faixa de preço.
*/

interface produto {
  id: string;
  name: string;
  preco: number;
  categoria: string
}

function criarRepositório() {
  const produtos: produto[] = []
  
  return{ 
    adicionarItem(item: produto): void{
    produtos.push(item)
    console.log(`Produto adicioado com sucesso!`)
  },
  
  buscarItensPorCategoria(categoria: string){
    const produtosEncontrados = produtos.filter(item => item.categoria === categoria)
    console.log(`Produtos cadastrados`)
    produtosEncontrados.forEach(produtosEncontrados => {
      
      console.log(`id: ${produtosEncontrados.id}\nnome: ${produtosEncontrados.name}\npreço: ${produtosEncontrados.preco}`)
    });

  }
}}

const repo = criarRepositório();
repo.adicionarItem({id: "1", name: "Teclado", preco: 200, categoria: "Informática"});
repo.buscarItensPorCategoria("Informática")