const listaProdutos = [
    {id: 1, nome: 'Teclado Mecânico RGB', preco: 300.00, disponivel: true},
    {id: 2, nome: 'Mouse Gamer', preco: 150.00, disponivel: false},
    {id: 3, nome: 'Monitor 144hz', preco: 1200.00, disponivel: false},
    {id: 4, nome: 'Headset 7.1', preco: 400.00, disponivel: false},
    {id: 5, nome: 'Cadeira Gamer', preco: 900.00, disponivel: false},
]

/////Filter
///For
const disponiveisFor = [];
for (let i = 0; i < listaProdutos. length; i++){
    if(listaProdutos[i].disponivel){
        disponiveisFor.push(listaProdutos[i]);
    }
}
//console.log(disponiveisFor);

///filter
const produtosEmEstoque = listaProdutos.filter(produto => produto.disponivel);
//console.log(produtosEmEstoque);

//MAP aplicar 10% de desconto
//for
const produtosComDescontoFor = [];
for(let i = 0; i < produtosEmEstoque.length; i++){
    const p = produtosEmEstoque[i];
    produtosComDescontoFor.push({
       ...p,
      precoFinal: +(p.preco *0.90).toFixed(2)
   });

 }
// console.log(produtosComDescontoFor);

//map
const produtosComDesconto = produtosEmEstoque.map(produto =>{
    return{
        ...produto,
        precoFinal: produto.preco *0.90
    }
})
console.log(produtosComDesconto);

//////REDUCE - calcula faturamento total
//for
let faturamentoTotalFor = 0;
for (let i = 0; i < produtosComDesconto.length; i++){
    faturamentoTotalFor += produtosComDesconto[i].precoFinal;
}
console.log(`R$ ${faturamentoTotalFor.toFixed(2)}`);

//reduce
const faturamentoTotal = produtosComDesconto.reduce((acumulador,item)=>{
    return acumulador + item.precoFinal;
}, 0);
console.log(`R$ ${faturamentoTotal.toFixed(2)}`);

console.log(`---RELATÓRIO DE VENDAS (LOJA GAMER) ----`);
console.log(`Produtos analisados : ${produtosComDesconto.length}`);
console.log(`Faturamento Previsto (com desconto): R$ ${faturamentoTotal.toFixed(2)}`);