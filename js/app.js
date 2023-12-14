let button = document.querySelector('.botao-adicionar');
let produtoEscolhido = [];

let produtos = document.querySelector('.produto-input').addEventListener('change', function produtoSelecionado(){

    let valores = new Array;
    valores['Fone de ouvido - R$100'] = 100;
    valores['Celular - R$1400'] = 1400;
    valores['Oculus VR - R$5000'] = 5000;    

    console.log(valores)
    console.log(valores.length)
})

function printClick(){
    foiClicado();
}

function foiClicado(){
    let clicado = true;
    if (clicado == true){
       console.log(produtos)
    }
}

button.addEventListener('click', printClick);


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