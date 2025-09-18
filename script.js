// Passo 2: Coleta e Armazenamento de Dados dos Produtos

// Array de objetos para armazenar os produtos da loja
const produtos = [
  { id: 1, nome: "Violão Acústico", marca: "Giannini", valor: 550.0 },
  { id: 2, nome: "Guitarra Stratocaster", marca: "Fender", valor: 2500.0 },
  { id: 3, nome: "Microfone Condensador", marca: "AKG", valor: 800.0 },
  { id: 4, nome: "Cabo P10", marca: "Santo Angelo", valor: 35.5 },
  { id: 5, nome: "Capa para Violão", marca: "Solid Sound", valor: 85.0 },
];

// O seletor de produtos no HTML
const seletorProdutos = document.getElementById("produto");

// Laço de repetição para preencher o seletor de produtos
for (const produto of produtos) {
  const option = document.createElement("option");
  option.value = produto.id;
  option.textContent = `${produto.nome} (${
    produto.marca
  }) - R$ ${produto.valor.toFixed(2)}`;
  seletorProdutos.appendChild(option);
}
