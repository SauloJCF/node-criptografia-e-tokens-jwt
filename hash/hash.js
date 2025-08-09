import { createHash } from 'crypto';

function criaHash(texto) {
    return createHash('sha-256').update(texto).digest('hex');
}

console.log(criaHash('abc@123'));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hashSenha = criaHash(senha);
    }

    autenticar(nome, senha) {
        if (nome === this.nome && criaHash(senha) == this.hashSenha) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        }

        console.log('Usuário e/ou senha inválidos!');
        return false;
    }
}

const user = new Usuario('joao.ricardo', 'lock@abc');

user.autenticar('joao.ricardo', 'lock@abc');

user.autenticar('joao.ricardo', 'LOCK@abc');

user.autenticar('joao.ricardo', 'abcdefg')