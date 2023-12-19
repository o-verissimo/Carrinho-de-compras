limpar();

function adicionar(){
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitário = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitário ;

    //adicionar o produto no carrinho  
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
                          </section>`;

    //atualizar o valor total da compra
    let valorAtual = document.querySelector('.carrinho__total').textContent;
    let valorProduto = parseFloat(valorAtual.split('R$')[1]);
    let valorTotal = (valorProduto + preco);
    if (valorTotal > 0){
        document.querySelector('p').innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
    }else{
        document.querySelector('p').innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${preco}</span>`;
    }
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    let limparTexto = document.getElementById('lista-produtos');
    let limparTotal = document.querySelector('p');

    limparTexto.textContent = '';
    limparTotal.textContent = 'Total: R$ 0 ';
}




