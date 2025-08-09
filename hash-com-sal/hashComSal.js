import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(texto) {
    const sal = randomBytes(16).toString('hex');
    
    const senhaHasheada = scryptSync(texto, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`;
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.senhaHasheada] = criaHashComSal(senha).split(':');
    }

    autenticar(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.senhaHasheada, 'hex');

            const hashsCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashsCorrespondem) {
                console.log('Usuário autenticado com com sucesso');
                return true;                
            }

            console.log('Usuário e/ou senha inválidos');
            
            return false;
        }
    }
}

const user = new Usuario('joao.ricardo', 'lock@abc');

console.log(user);

user.autenticar('joao.ricardo', 'lock@abc');

user.autenticar('joao.ricardo', 'Lock@abc');

user.autenticar('joao.ricardo', 'elpato');