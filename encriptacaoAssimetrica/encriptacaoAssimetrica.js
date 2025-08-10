import { generateKeyPairSync } from 'crypto';

const { privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

// console.log(privateKey);
// console.log(publicKey);

import { publicEncrypt, privateDecrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('Minha mensagem secreta!'));

console.log(dadosCriptografados.toString('hex'));

const dadosDescriptografados = privateDecrypt(privateKey, dadosCriptografados);

console.log('Dados Descriptografados: ' + dadosDescriptografados.toString('utf-8'));
