let botton = document.querySelector('botao-form botao-adicionar');

document.getElementById('produto').addEventListener('change', function produtoSelecionado(){

    let valores = new Array();
    valores['Fone de ouvido - R$100'] = 100;
    valores['Celular - R$1400'] = 1400;
    valores['Oculus VR - R$5000'] = 5000;    


})

function printClick(){
    console.log('foi clicado');
}

function foiClicado(){
    console.log('O botão foi clicado')
}



function adicionar(){
    let adicionar = document.getElementById('lista-produtos');
    let conteudoAdicionado = adicionar.querySelector('section');
}


function limpar(){
    let limparTexto = document.getElementById('lista-produtos');
    let textoLimpo = limparTexto.querySelector('section');
    let limparTotal = document.querySelector('p')

    textoLimpo.textContent = 'Carrinho Vazio ;-;';
    limparTotal.textContent = 'Total:'
    console.log(textoLimpo);
}