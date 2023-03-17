//Código:
//Passo01: Receber o nome da atividade e nota 
//Passo02: Adicionar os valores recebidos 
//Passo03: Registrar os valores nos seus devidos campo 
//Passo04: Comparar os valor da nota com o valores para aprovado e reprovado 
//Passo05: Responder ao usuário se ele está aprovado ou reprovado e exibir o emoji correspondente 

//Registrar como uma constante o que iremos usar do html 

const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<spam class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<spam class="resultado reprovado">Reprovado</span>';
const notaMínima = parseFloat(prompt("Digite a nota mínima"));

let linhas= ''; //variável vazia para receber o conteúdo
//Retirar a atualização, reload da página sempre que apertarmos o butão para submeter algo 

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha(); 
    atualizaTabela(); 
    atualizaMediaFinal() 
});

function adicionaLinha() {
    //Registrar constantes para receber os valores dados pelo usuário

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    }else{
        
        atividade.push(inputNomeAtividade.value);//colocando o valor de NomeAtividade
        notas.push(parseFloat(inputNotaAtividade.value));//colocando o valor de notaAtividade

        //Inserindo na tabela os valores recebidos pelo usuario 

    //criar uma variável que será a linha e depois criar as colunas (+= conquenatena, ou seja, juntar)

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMínima ? imgAprovado : imgReprovado} </td>`;
    linha += '<tr/>';

    linhas += linha;
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {

    //inserir um elemento java em um elemento HTML
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    
    const mediaFinal = calculaMediaFinal ()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMínima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal () {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;

}