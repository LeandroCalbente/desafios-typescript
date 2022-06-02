const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'

}
const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 28,
    profissao: 'atriz'

}

enum Profissao {
    Professora,
    Atriz1,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = { 
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria1: Pessoa ={
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Professora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 19,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(jessica.materias);