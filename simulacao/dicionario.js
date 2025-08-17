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

const user = new Usuario('joao.ricardo', 'senha123');

// código omitido

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"];

senhasComuns.map(senha => {
    if (user.autenticar('joao.ricardo', senha)) {
        console.log(`A senha do usuário é ${senha}`);
    }
})