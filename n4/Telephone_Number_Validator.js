/* Atividade 4 - Retorne true se a string passada parecer um número de telefone válido dos EUA.

O usuário pode preencher o campo do formulário da maneira que escolher, desde que tenha o formato de um número válido dos EUA. Alguns exemplos de formatos válidos:
555-555-5555 
(555)555-5555 
(555) 555-5555 
555 555 5555 
5555555555 
1 555 555 5555

Neste desafio, será apresentada uma string (como 800-692-7753 ou 8oo-six427676;laskdjf). Seu trabalho é validar ou rejeitar o número com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deve confirmar que é 1. Retorne true se for válido; caso contrário, retorne false. */ 



function telephoneCheck(str) {
  if (str[0] !== '(' && isNaN(parseInt(str[0]))) {
    return false;
  }
 
  let hasOpen = str.includes('(');
  let hasClose = str.includes(')');
  if (hasOpen || hasClose) {
    if (hasOpen !== hasClose) return false;
    let openPos = str.indexOf('(');
    let closePos = str.indexOf(')');
    
    if (closePos <= openPos || closePos - openPos !== 4) return false;
  }

  let digits = "";
  for (let char of str) {
    if (char >= '0' && char <= '9') {
      digits += char;
    } else if (" -()".indexOf(char) === -1) {
      return false;
    }
  }

  if (digits.length === 11) {
    if (digits[0] !== '1') return false;
  } else if (digits.length !== 10) {
    return false;
  }

  let lastFourCount = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= '0' && str[i] <= '9') {
      lastFourCount++;
    } else if (str[i] === '-' || str[i] === ' ') {
      if (lastFourCount > 0 && lastFourCount < 4) return false;
    }
    if (lastFourCount === 4) break;
  }
  
  if (lastFourCount < 4) return false;

  return true;
}