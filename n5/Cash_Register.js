/* Atividade 5 - Caixa Registradora
Crie uma função de gaveta de caixa registradora checkCashRegister() que aceita o preço de compra (price) como primeiro argumento, o pagamento (cash) como o segundo argumento e o dinheiro na gaveta (cid) como o terceiro argumento.

cid é um array 2D listando as moedas e notas disponíveis.
A função checkCashRegister() deve sempre retornar um objeto com uma chave status e uma chave change (troco).

- Return {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se não for possível retornar o troco exato.
- Return {status: "CLOSED", change: [...]} com o dinheiro na gaveta como valor para a chave change se for exatamente igual ao troco devido.
- Caso contrário, return {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor valor, como o valor da chave change.

Exemplo de valores (Currency Unit / Amount):
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */


function checkCashRegister(price, cash, cid) {
 
  const UNIT_VALUES = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let changeDue = (cash - price) * 100;
  let totalInDrawer = cid.reduce((acc, curr) => acc + curr[1] * 100, 0);

  if (totalInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray = [];
  let reversedCid = [...cid].reverse(); 

  for (let [name, amount] of reversedCid) {
    let amountInCents = amount * 100;
    let unitValue = UNIT_VALUES[name];
    let amountTaken = 0;

    while (changeDue >= unitValue && amountInCents > 0) {
      changeDue -= unitValue;
      amountInCents -= unitValue;
      amountTaken += unitValue;
    }

    if (amountTaken > 0) {
      changeArray.push([name, amountTaken / 100]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

