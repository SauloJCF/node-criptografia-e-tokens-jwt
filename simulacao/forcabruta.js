import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hashSenha = this.criaHash(senha);
    }

    criaHash(texto) {
        return createHash('sha-256').update(texto).digest('hex');
    }

    autenticar(nome, senha) {
        if (nome === this.nome && this.criaHash(senha) == this.hashSenha) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        }
        
        return false;
    }
}

const user = new Usuario('joao.ricardo', '1337');

for (let senhaTeste = 0; senhaTeste < 10000 ; senhaTeste++) {
    if (user.autenticar('joao.ricardo', senhaTeste.toString())) {
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}