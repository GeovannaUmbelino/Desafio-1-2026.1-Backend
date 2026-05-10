/* Atividade 3 - Cifra de César
Uma das cifras mais simples e conhecidas é a Cifra de César, também conhecida como cifra de deslocamento. Nela, o significado das letras é deslocado por uma quantidade definida.

Um uso moderno comum é a cifra ROT13, onde os valores das letras são deslocados em 13 posições. Assim, A ↔ N, B ↔ O e assim por diante.

Escreva uma função que receba uma string codificada em ROT13 como entrada e retorne a string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (ou seja, espaços, pontuação), apenas repasse-os. */

function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    
    const charCode = char.charCodeAt(0);
    
    return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
  });
}


rot13("SERR PBQR PNZC");