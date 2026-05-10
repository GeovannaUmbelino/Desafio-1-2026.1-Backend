/*Atividade 1 - Verificador de Palíndromo
Retorne true  se a string fornecida for um palíndromo. Caso contrário, retorne false.

Um palíndromo é uma palavra ou frase que é escrita da mesma forma de trás para frente, ignorando pontuação, letras maiúsculas/minúsculas e espaços.

Nota: Você precisará remover todos os caracteres não-alfanuméricos (pontuação, espaços e símbolos) e transformar tudo na mesma caixa (minúscula ou maiúscula) para verificar se é um palíndromo. */

function palindrome(str) {
  
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  for (let i = 0; i < s.length / 2; i++) {
    
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  
  return true;
}

palindrome("eye");