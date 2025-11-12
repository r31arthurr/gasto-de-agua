const alimentos = [
  { nome: "Café (Grão Torrado)", gasto: 18900, verde: 70, azul: 20, cinza: 10, img: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg" },
  { nome: "Chocolate (Massa)", gasto: 17196, verde: 72, azul: 20, cinza: 8, img: "https://newenglandcooks.com/assets/image-cache/11.Chocolate%20Paste_opt.b6ed3a83.e4ae9db8.jpg" },
  { nome: "Chá", gasto: 8700, verde: 85, azul: 10, cinza: 5, img: "https://marjan.com.br/wp-content/uploads/2022/10/tipos-de-cha.jpeg" },
  { nome: "Carne Bovina", gasto: 15400, verde: 94, azul: 4, cinza: 2, img: "https://imagens-cdn.canalrural.com.br/2018/11/meat-3139641_1920.jpg" },
  { nome: "Carne de Cordeiro/Ovelha", gasto: 10400, verde: 88, azul: 8, cinza: 4, img: "https://i.pinimg.com/736x/91/fa/7b/91fa7b0ed45ba9bd60add077ea0eb8ef.jpg" },
  { nome: "Carne Suína", gasto: 6000, verde: 85, azul: 10, cinza: 5, img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/007/019/rte/cortes-ideais-carne-suina-para-nao-sair-da-dieta.jpg" },
  { nome: "Manteiga", gasto: 5550, verde: 86, azul: 8, cinza: 6, img: "https://tse2.mm.bing.net/th/id/OIP.T6JcR7sXEnZSwT9dToQTkwHaFK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Frango", gasto: 4325, verde: 80, azul: 15, cinza: 5, img: "https://ibassets.com.br/ib.item.image.big/b-34e8125515a945829354f59a608825b1.png" },
  { nome: "Nozes", gasto: 9060, verde: 76, azul: 18, cinza: 6, img: "https://tse1.mm.bing.net/th/id/OIP.sa6ZxKDxQkpdBtzoykDSqQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Feijão Seco", gasto: 5600, verde: 84, azul: 10, cinza: 6, img: "https://tse2.mm.bing.net/th/id/OIP.QaDI2jndci4NnmttJ3t0ggHaEx?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Ovos", gasto: 3265, verde: 75, azul: 20, cinza: 5, img: "https://tse4.mm.bing.net/th/id/OIP.1Ybvv6jklES-g0IEE1G87gHaE_?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Queijo (Duro)", gasto: 5060, verde: 83, azul: 12, cinza: 5, img: "https://ciclovivo.com.br/wp-content/uploads/2017/06/iStock-584883248.jpg" },
  { nome: "Azeitona", gasto: 3025, verde: 85, azul: 10, cinza: 5, img: "https://th.bing.com/th/id/R.6ce18a3dea07f00ae6987acbdf01cd56?rik=UnzlN9g1cdPp5g&pid=ImgRaw&r=0" },
  { nome: "Arroz (Paddy)", gasto: 2497, verde: 50, azul: 30, cinza: 20, img: "https://tse4.mm.bing.net/th/id/OIP.Y6kV5LT2Zfzt0ViI0WzHcQHaE9?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Aveia", gasto: 1788, verde: 88, azul: 8, cinza: 4, img: "https://blog.barano.com.br/wp-content/uploads/2024/07/Aveia-Seus-Beneficios-e-Dicas-de-Consumo.jpg" },
  { nome: "Soja", gasto: 2145, verde: 80, azul: 15, cinza: 5, img: "https://th.bing.com/th/id/R.7d7cac11ac22ed3a917ccfbe49ef57db?rik=%2by9Bn9Zhh9efEA&pid=ImgRaw&r=0" },
  { nome: "Abacate", gasto: 1981, verde: 82, azul: 12, cinza: 6, img: "https://tse2.mm.bing.net/th/id/OIP.Gzmc7HBJ5Yv71S6gXzhhlwHaFC?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Macarrão Cru", gasto: 1849, verde: 78, azul: 15, cinza: 7, img: "https://img.freepik.com/fotos-premium/macarrao-cru-sobre-fundo-de-tigela-de-madeira-close-up-macarrao-cru-em-espiral-macarrao-fusilli-delicioso-nao-cozido-para-cozinhar-alimentos_73523-7820.jpg" },
  { nome: "Trigo", gasto: 1827, verde: 85, azul: 10, cinza: 5, img: "https://tse2.mm.bing.net/th/id/OIP.jD2BiiST08K6mnGQfsf8mQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Açúcar de Cana", gasto: 1782, verde: 90, azul: 5, cinza: 5, img: "https://tse3.mm.bing.net/th/id/OIP.hCoENsXs6aVkoCp1dOOUbQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Pão", gasto: 1608, verde: 80, azul: 15, cinza: 5, img: "https://tse1.mm.bing.net/th/id/OIP.DD_M1G_DUq7AsRj6Y-hitAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Lentilha", gasto: 5870, verde: 83, azul: 10, cinza: 7, img: "https://vitat.com.br/wp-content/uploads/2019/11/natural-organic-green-lentils-pt.jpg" },
  { nome: "Milho", gasto: 1222, verde: 85, azul: 10, cinza: 5, img: "https://tse3.mm.bing.net/th/id/OIP.DKqnWstcx-EmbRvY-bZ6ZgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Leite", gasto: 1020, verde: 87, azul: 8, cinza: 5, img: "https://th.bing.com/th/id/OIP.Ben12Xnk2UypStOVZgKdrAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Maçã", gasto: 822, verde: 78, azul: 15, cinza: 7, img: "https://static.itdg.com.br/images/1200-630/749b72864d0cca0d369a14866ac1aa9a/shutterstock-290834552.jpg" },
  { nome: "Banana", gasto: 790, verde: 84, azul: 10, cinza: 6, img: "https://static.todamateria.com.br/upload/ba/na/banana-og.jpg" },
  { nome: "Laranja", gasto: 560, verde: 80, azul: 12, cinza: 8, img: "https://vitat.com.br/wp-content/uploads/2024/02/tipos-de-laranja.jpg" },
  { nome: "Batata", gasto: 287, verde: 70, azul: 20, cinza: 10, img: "https://th.bing.com/th/id/R.29ec3a670ac29ef2fd9446bdeac8bf8f?rik=%2b8GhDQCGBer3KA&pid=ImgRaw&r=0" },
  { nome: "Alface", gasto: 240, verde: 65, azul: 25, cinza: 10, img: "https://th.bing.com/th/id/OIP.WV8vytscqlG3fkC99-mZHgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { nome: "Tomate", gasto: 214, verde: 75, azul: 20, cinza: 5, img: "https://th.bing.com/th/id/R.c2198fb578d7ed67aebe982240ccc9b6?rik=0mOhj13x8lJvTA&pid=ImgRaw&r=0" }
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



