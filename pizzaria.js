// QUESTÃO 1
const nomePizzaria = "Forno Digital";
const sabores = ["Calabresa", " Margherita", " Portuguesa", " Quatro Queijos", " Frango com Catupiry"];
const precos = [42, 38, 45, 50, 44]; // preço da pizza média (M)
const pedidosSabor = [0, 2, 1, 4, 0, 3, 0, 1, 4, 2, 0, 3];
const pedidosTamanho = ["M", "G", "P", "G", "M", "G", "P", "M", "G", "M", "G", "P"];
const taxaEntrega = 7.5; // taxa de entrega fixa
let pizzariaAberta = true;
let totalPedidos = pedidosSabor.length;
console.log("Foi usado const para o que não vai ter seu valor alterado e let para o que pode mudar. O tipo do array de sabores é string, e o resultado obtido é: " + sabores+". O total de pedidos da noite foram: "+totalPedidos);
console.log("=============================")

const formatarReais = function (valor) {
   return `R$ ${valor.toFixed(2)}`;
};

// QUESTÃO 2
function calcularPreco(indiceSabor, tamanho) {
    switch (tamanho) {
        case "P":
            return precos[indiceSabor] * 0.8; // 80% do preço normal para tamanho pequeno
        case "M":
            return precos[indiceSabor]; // preço normal para tamanho médio
        case "G":
            return precos[indiceSabor] * 1.3; // 30% de acréscimo para tamanho grande
        default:
            console.log("Tamanho inválido!"); // tamanho inválido
            return 0;
    }
}

// QUESTÃO 3
function calcularEntrega(valorPizza) {
    return valorPizza >= 55 ? 0 : taxaEntrega;
}

// QUESTÃO 4
for (let i = 0; i < totalPedidos; i++) {
    const indiceSabor = pedidosSabor[i];
    const tamanho = pedidosTamanho[i];
    const precoPizza = calcularPreco(indiceSabor, tamanho);
    const valorEntrega = calcularEntrega(precoPizza);
    const valorTotalPedido = precoPizza + valorEntrega;
    console.log(`Pedido ${i + 1}: ${sabores[indiceSabor]} (${tamanho}) | R$ ${precoPizza.toFixed(2)} + entrega R$ ${valorEntrega.toFixed(2)} = R$ ${valorTotalPedido.toFixed(2)}`);
}
// QUESTÃO 5
let indiceMaisVendido = 0;
let contagemSabores = 0;
let arrayContagem = [0, 0, 0, 0, 0]
for (let i = 0; i < pedidosSabor.length; i++) {
    if (pedidosSabor[i] == 0) {
        arrayContagem[0] += 1;
    }else if(pedidosSabor[i] == 1){
      arrayContagem[1] += 1
    }else if(pedidosSabor[i] == 2){
      arrayContagem[2] += 1
    }else if(pedidosSabor[i] == 3){
      arrayContagem[3] += 1
    }else{
      arrayContagem[4] += 1
    }
}

let maiorQuantidade = arrayContagem[0]; 
for (let i = 0; i < arrayContagem.length; i++) {
    if (arrayContagem[i] > maiorQuantidade) {
        maiorQuantidade = arrayContagem[i];
        indiceMaisVendido = i;
    }else{
        maiorQuantidade = maiorQuantidade;
    }
}

console.log(`O sabor mais vendido foi ${sabores[indiceMaisVendido]} com ${maiorQuantidade} pedidos.`);

let faturamentoTotal = 0;

let pizzasGrandes = 0;

const valoresPedidos = [];

for (let i = 0; i < totalPedidos; i++) {

    const precoPizza = calcularPreco(pedidosSabor[i], pedidosTamanho[i]);

    const valorTotalPedido = precoPizza + calcularEntrega(precoPizza);

    faturamentoTotal += valorTotalPedido;

    valoresPedidos.push(valorTotalPedido);

    if (pedidosTamanho[i] == "G") {

        pizzasGrandes += 1;

    }

}

console.log(`Faturamento total: ${formatarReais(faturamentoTotal)}`);

console.log(`Pizzas grandes vendidas: ${pizzasGrandes}`);

sabores.forEach((sabor, i) => {

    console.log(`${i + 1}. ${sabor} - ${formatarReais(precos[i])}`);

});

const pedidosAcima50 = valoresPedidos.filter(valor => valor > 50);

console.log(`Pedidos acima de R$ 50: ${pedidosAcima50.length}`);

const comCupom = valoresPedidos.map(valor => valor * 0.9);

console.log("Valores com cupom de 10%:");

comCupom.forEach(valor => console.log(formatarReais(valor)));

// QUESTÃO 7

const meta = 800;

let faturamentoSimulado = faturamentoTotal; // cópia: o original não muda

let pizzasExtras = 0;

const valorQuatroQueijosG = calcularPreco(3, "G");

const entregaExtra = calcularEntrega(valorQuatroQueijosG);

while (faturamentoSimulado < meta) {

    faturamentoSimulado += valorQuatroQueijosG + entregaExtra;

    pizzasExtras++;

}

console.log(`Faltam ${pizzasExtras} pizzas Quatro Queijos G para a meta de ${formatarReais(meta)}.`);

if (faturamentoTotal >= 600 && pizzasGrandes >= 4) {

    console.log("Dia excelente!");

} else if (faturamentoTotal >= 400 || pizzasGrandes >= 6) {

    console.log("Dia bom.");

} else {

    console.log("Dia fraco.");

}
 