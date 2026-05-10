/*Atividade 2 - Conversor de Números Romanos
Converta o número fornecido em um algarismo romano.

Por exemplo:
M = 1000 
CM = 900 
D = 500 
CD = 400
C = 100 
XC = 90 
L = 50
XL = 40
X = 10 
IX = 9 
V = 5 
IV = 4 
I = 1

Todas as respostas em algarismos romanos devem ser fornecidas em letras maiúsculas. */

function convertToRoman(num) {
  // Valores dos números romanos
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = "";
  
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

convertToRoman(36);