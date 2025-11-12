const alimentos = [
  { nome: "Café (Grão Torrado)", gasto: 18900, verde: 70, azul: 20, cinza: 10, img: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg" },
  { nome: "Chocolate (Massa)", gasto: 17196, verde: 72, azul: 20, cinza: 8, img: "https://www.pexels.com/photo/close-up-photo-of-chocolate-spread-7213880/" },
  { nome: "Chá", gasto: 8700, verde: 85, azul: 10, cinza: 5, img: "https://marjan.com.br/wp-content/uploads/2022/10/tipos-de-cha.jpeg" },
  { nome: "Carne Bovina", gasto: 15400, verde: 94, azul: 4, cinza: 2, img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Raw_beef_steak.jpg" },
  { nome: "Carne de Cordeiro/Ovelha", gasto: 10400, verde: 88, azul: 8, cinza: 4, img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Lamb_ribs_raw.jpg" },
  { nome: "Carne Suína", gasto: 6000, verde: 85, azul: 10, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Pork_meat.jpg" },
  { nome: "Manteiga", gasto: 5550, verde: 86, azul: 8, cinza: 6, img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Butter_in_dish.jpg" },
  { nome: "Frango", gasto: 4325, verde: 80, azul: 15, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Raw_chicken_breast.png" },
  { nome: "Nozes", gasto: 9060, verde: 76, azul: 18, cinza: 6, img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Walnuts_in_shell_and_out.jpg" },
  { nome: "Feijão Seco", gasto: 5600, verde: 84, azul: 10, cinza: 6, img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kidney_beans.jpg" },
  { nome: "Ovos", gasto: 3265, verde: 75, azul: 20, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chicken_eggs.jpg" },
  { nome: "Queijo (Duro)", gasto: 5060, verde: 83, azul: 12, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Parmigiano_Reggiano_chunk.jpg" },
  { nome: "Azeitona", gasto: 3025, verde: 85, azul: 10, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Olives%2C_black_and_green.jpg" },
  { nome: "Arroz (Paddy)", gasto: 2497, verde: 50, azul: 30, cinza: 20, img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rice_grains_%28IRRI%29.jpg" },
  { nome: "Aveia", gasto: 1788, verde: 88, azul: 8, cinza: 4, img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Oats.jpg" },
  { nome: "Soja", gasto: 2145, verde: 80, azul: 15, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Soybeans.jpg" },
  { nome: "Abacate", gasto: 1981, verde: 82, azul: 12, cinza: 6, img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Avocado.jpg" },
  { nome: "Macarrão Cru", gasto: 1849, verde: 78, azul: 15, cinza: 7, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Spaghetti_raw.jpg" },
  { nome: "Trigo", gasto: 1827, verde: 85, azul: 10, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Wheat_close-up.jpg" },
  { nome: "Açúcar de Cana", gasto: 1782, verde: 90, azul: 5, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Brown_sugar_crystals.jpg" },
  { nome: "Pão", gasto: 1608, verde: 80, azul: 15, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bread_white.jpg" },
  { nome: "Lentilha", gasto: 5870, verde: 83, azul: 10, cinza: 7, img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Lentils_red_and_green.jpg" },
  { nome: "Milho", gasto: 1222, verde: 85, azul: 10, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Corncobs.jpg" },
  { nome: "Leite", gasto: 1020, verde: 87, azul: 8, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Milk_glass.jpg" },
  { nome: "Maçã", gasto: 822, verde: 78, azul: 15, cinza: 7, img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { nome: "Banana", gasto: 790, verde: 84, azul: 10, cinza: 6, img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { nome: "Laranja", gasto: 560, verde: 80, azul: 12, cinza: 8, img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
  { nome: "Batata", gasto: 287, verde: 70, azul: 20, cinza: 10, img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Potatoes.jpg" },
  { nome: "Alface", gasto: 240, verde: 65, azul: 25, cinza: 10, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lettuce.jpg" },
  { nome: "Tomate", gasto: 214, verde: 75, azul: 20, cinza: 5, img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg" }
];

const lista = document.getElementById("alimentos-lista");
const nomeEl = document.getElementById("nome-alimento");
const gastoEl = document.getElementById("gasto");
const descricaoEl = document.getElementById("descricao");
const imgEl = document.getElementById("imagem-alimento");

alimentos.forEach(a => {
  const li = document.createElement("li");
  li.textContent = `${a.nome} — ${a.gasto} L/kg`;
  li.onclick = () => atualizar(a);
  lista.appendChild(li);
});

const ctx = document.getElementById("grafico");
const grafico = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Verde", "Azul", "Cinza"],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: ["#4CAF50", "#2196F3", "#757575"],
      borderWidth: 1
    }]
  },
  options: {
    animation: { animateRotate: true, animateScale: true },
    plugins: { legend: { display: false } }
  }
});

function atualizar(alimento) {
  nomeEl.textContent = alimento.nome;
  gastoEl.textContent = `Gasto Total: ${alimento.gasto} L/kg`;
  imgEl.src = alimento.img;

  const verde = alimento.gasto * (alimento.verde / 100);
  const azul = alimento.gasto * (alimento.azul / 100);
  const cinza = alimento.gasto * (alimento.cinza / 100);

  grafico.data.datasets[0].data = [verde, azul, cinza];
  grafico.update();

  document.querySelector(".verde").textContent = `Gasto Verde: ${alimento.verde}% (${Math.round(verde)} L/kg)`;
  document.querySelector(".azul").textContent = `Gasto Azul: ${alimento.azul}% (${Math.round(azul)} L/kg)`;
  document.querySelector(".cinza").textContent = `Gasto Cinza: ${alimento.cinza}% (${Math.round(cinza)} L/kg)`;

  descricaoEl.textContent = `${alimento.nome} consome cerca de ${alimento.gasto} litros de água para produzir 1 kg, sendo distribuído em ${alimento.verde}% de água verde, ${alimento.azul}% azul e ${alimento.cinza}% cinza.`;
}

