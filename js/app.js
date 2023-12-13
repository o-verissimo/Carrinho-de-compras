let produtoEscolhido = document.getElementById('lista-produtos');
let totalProduto = 0;

document.getElementById('produto').addEventListener('change', function produtoSelecionado(){

    let valores = new Array();
    valores['Fone de ouvido - R$100'] = 100;
    valores['Celular - R$1400'] = 1400;
    valores['Oculus VR - R$5000'] = 5000;    


})


function adicionar(){
    console.log('escolha');
}

function limpar(){
    let limpar = document.querySelector('section.section.span');
    console.log(limpar);
}