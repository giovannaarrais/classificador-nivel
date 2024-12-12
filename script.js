let nome = document.getElementById('nome');
let nivel = document.getElementById('nivel');
let botao = document.querySelector('.botaoVerificar');
let resultado = document.querySelector('.resultado');


class Jogador {
    constructor (nome, nivel){
        this.nome = nome;
        this.nivel = parseInt(nivel);
    }

    resposta(){
        if(this.nivel < 1000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Ferro`;
        }

        else if (this.nivel > 1001 && this.nivel < 2000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Bronze`;
        }

        else if (this.nivel > 2001 && this.nivel < 5000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Prata`;
        }

        else if (this.nivel > 5001 && this.nivel < 7000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Ouro`;
        }

        else if (this.nivel > 7001 && this.nivel < 8000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Platina`;
        }

        else if (this.nivel > 8001 && this.nivel < 9000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Ascendente`;
        }

        else if (this.nivel > 9001 && this.nivel < 10.000){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Imortal`;
        }

        else if (this.nivel > 10001){
            return `O Herói de nome ${this.nome} está no nível de ${this.nivel}, portando é nivel Radiante`;
        }
        
        else {
            return alert( `Sinto muito ${this.nome}! Não conseguimos identificar seu nivel.`);
        }
    }
}

function estrutura(){
    let jogador = new Jogador(
        nome.value,
        nivel.value,
    );

    resultado.innerHTML = jogador.resposta();
}

function buttonActive(){
    botao.addEventListener('click', estrutura);
}

function init(){
    buttonActive();
}