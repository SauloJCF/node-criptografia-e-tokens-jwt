const minhaMensagem = "minha mensagem secreta zumba";

console.log(minhaMensagem);

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);

    let codigoCaracterCifra;

    if (codigoCaractere >= 65 && codigoCaractere <= 90) {
      codigoCaracterCifra = ((codigoCaractere - 65 + movimentos) % 26) + 65;
    } else if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      codigoCaracterCifra = ((codigoCaractere - 97 + movimentos) % 26) + 97;
    } else {
      codigoCaracterCifra = codigoCaractere;
    }

    return String.fromCharCode(codigoCaracterCifra);
  });

  return mensagemCifrada.join("");
}

const mensagemCifrada = cifraMensagem(minhaMensagem, 6);

console.log(mensagemCifrada);

function decifraMensagem(mensagem, movimentos) {
  const mensagemDeCifrada = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);

    let codigoCaracterDecifrado;

    if (codigoCaractere >= 65 && codigoCaractere <= 90) {
      codigoCaracterDecifrado = ((codigoCaractere - 65 - movimentos + 26) % 26) + 65;
    } else if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      codigoCaracterDecifrado = ((codigoCaractere - 97 - movimentos + 26) % 26) + 97;
    } else {
      codigoCaracterDecifrado = codigoCaractere;
    }

    return String.fromCharCode(codigoCaracterDecifrado);
  });

  return mensagemDeCifrada.join("");
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 6);

console.log(mensagemDecifrada);
