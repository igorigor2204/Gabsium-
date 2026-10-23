
/* ==========================================
========================================== */

const textosGabsium = {
  design: {
    titulo: "🎨 Uma análise mais criativa vai ",

    texto: "Algumas coisas são bonitas pela forma como elas foram desenhadas, já outras, pelo significado que elas carregam. E por incrível que pareça, existem pessoas que conseguem ser as duas coisas ao mesmo tempo: ter um jeito próprio de enxergar o mundo e tornar especiais até os detalhes mais simples e sutis. Você é uma dessas pessoas, minha vida.",

    status: "Status: admiração em análise..."
  },

  farmacia: {
    titulo: "🧪 A composição inexplicável do sentimento",

    texto: "Se eu pudesse analisar tudo o que sinto por você, mor, eu encontraria carinho por demais, admiração, saudade, MUUUITO AMOR e uma vontade imensa de continuar te conhecendo, cada vez mais, tintin por tintin. Mas nenhuma análise, nem a mais precisa que fosse, seria osuficiente para explicar tudo...",

    status: "Status: impossível de quantificar ou diagnosticar."
  },

  segredo: {
    titulo: "✨ Arquivo confidencial, mocinha",

    texto: "Tentei encontrar uma maneira de explicar o que é o Gabsium de fato. Eu testei palavras, comparei hipóteses, fiz cálculos e mais cálculos e até procurei uma definição exata. Mas talvez existam sentimentos que a gente não consiga traduzir por completo, por mais que tente ao máximo.",

    status: "Status: descoberta aguardando revelação..."
  }
};

/*
  💌 MENSAGEM FINAL

  Cada item do array é um parágrafo.
  Edite, apague ou acrescente parágrafos à vontade.
  Mantenha as aspas e a vírgula entre os parágrafos.
*/

const mensagemFinal = [
  "Marta,",

  "Eu tentei e tento encontrar palavras capazes de traduzir o que sinto por você todos os dias, mas nenhuma parece grande o suficiente. 'Eu te amo' é o que chega mais perto, mesmo sabendo que essas palavras não conseguem carregar tudo o que existe dentro do meu peito, todo o significado que você de fato tem pra mim.",

  "Eu te amo por inteiro, mulher. Pela pessoa que você é, pelo seu jeito descontraído e delicado, pela sua voz, pela sua aparência (você é linda demais minha paixão casa comigo pfv), pela sua criatividade (amo), pela sua inteligência todinha (que me enche de admiração e orgulho) e por todas aquelas pequenas coisas que talvez você nem perceba que fazem parte de quem você é.",

  "Quero continuar trabalhando de maneira intrapessoal, reconhecendo minhas iniquidades e transformando minhas intenções em atitudes concretas. Eu não existo sem você, meu love.",

  "O sentimento que tenho por você é de outro mundo. E junto dele, existe a vontade de empilhar pedacinho por pedacinho, remodelar tudo com um novo porte, propósito e significado junto a ti. Sem pressa, sem correria.",

  "Eu te amo, Gabriela. Do fundo do meu peito, de todo o meu coração.",

  "Talvez essas palavras ainda sejam pequenas para explicar o que sinto. Mas são as mais sinceras que eu tenho.",

];


/* ==========================================
   🧪 FUNCIONAMENTO DO SITE
   Você não precisa editar abaixo desta linha.
========================================== */

const inicio = document.getElementById("inicio");
const experimento = document.getElementById("experimento");

const botaoIniciar = document.getElementById("iniciar");
const botaoVoltar = document.getElementById("voltar");

const cartoes = document.querySelectorAll(".cartao-interativo");
const detalhe = document.getElementById("detalhe");

const areaSecreta = document.getElementById("area-secreta");
const botaoDesbloquear = document.getElementById("desbloquear");
const revelacao = document.getElementById("revelacao");


/* 💗 CHUVA DE CORAÇÕES */

function iniciarChuvaDeCoracoes() {
  const simbolos = ["💜", "💗", "💕", "🤍", "💖"];
  const quantidade = 24;

  for (let i = 0; i < quantidade; i++) {
    const coracao = document.createElement("span");

    coracao.classList.add("coracao-chuva");
    coracao.textContent =
      simbolos[Math.floor(Math.random() * simbolos.length)];

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (14 + Math.random() * 15) + "px";

    coracao.style.setProperty(
      "--duracao",
      (5 + Math.random() * 3) + "s"
    );

    coracao.style.setProperty(
      "--atraso",
      (Math.random() * 1.5) + "s"
    );

    document.body.appendChild(coracao);

    coracao.addEventListener("animationend", function () {
      coracao.remove();
    }, { once: true });
  }
}


/* 🔐 REINICIAR O SEGREDO */

function reiniciarSegredo() {
  areaSecreta.classList.add("oculto");
  revelacao.classList.add("oculto");
  revelacao.replaceChildren();

  botaoDesbloquear.textContent = "Revelar descoberta? ✨";
  botaoDesbloquear.disabled = false;

  const aviso = areaSecreta.querySelector("p");
  aviso.textContent = "🔐 Um arquivo confidencial foi encontrado.";
}


/* 🚪 ABRIR O EXPERIMENTO */

botaoIniciar.addEventListener("click", function () {
  inicio.classList.add("oculto");
  experimento.classList.remove("oculto");
});


/* ↩ VOLTAR AO INÍCIO */

botaoVoltar.addEventListener("click", function () {
  experimento.classList.add("oculto");
  inicio.classList.remove("oculto");

  cartoes.forEach(function (cartao) {
    cartao.classList.remove("ativo");
  });

  detalhe.replaceChildren();

  const mensagemInicial = document.createElement("p");
  mensagemInicial.textContent = "Escolha um cartão para investigar.";
  detalhe.append(mensagemInicial);

  reiniciarSegredo();
});


/* 🎨 CARTÕES INTERATIVOS */

cartoes.forEach(function (cartao) {
  cartao.addEventListener("click", function () {
    cartoes.forEach(function (item) {
      item.classList.remove("ativo");
    });

    cartao.classList.add("ativo");

    const tipo = cartao.dataset.tipo;
    const descoberta = textosGabsium[tipo];

    reiniciarSegredo();

    if (tipo === "segredo") {
      areaSecreta.classList.remove("oculto");
    }

    detalhe.replaceChildren();

    const titulo = document.createElement("h3");
    titulo.textContent = descoberta.titulo;

    const texto = document.createElement("p");
    texto.textContent = descoberta.texto;

    const status = document.createElement("small");
    status.textContent = descoberta.status;

    detalhe.append(titulo, texto, status);
  });
});



/* 💌 REVELAÇÃO FINAL */

botaoDesbloquear.addEventListener("click", function () {
  revelacao.replaceChildren();

  const simbolo = document.createElement("div");
  simbolo.textContent = "✨";
  simbolo.style.fontSize = "36px";
  simbolo.style.marginBottom = "8px";

  const titulo = document.createElement("h3");
  titulo.textContent = "Descoberta desbloqueada";

  revelacao.append(simbolo, titulo);

  // 💌 Primeiro aparecem todos os parágrafos da declaração
  mensagemFinal.forEach(function (paragrafo) {
    const texto = document.createElement("p");
    texto.textContent = paragrafo;
    revelacao.appendChild(texto);
  });

  // 💜 A pergunta especial aparece uma única vez, no final
  const perguntaFinal = document.createElement("div");
  perguntaFinal.className = "pergunta-final";

  const tituloCapitulo = document.createElement("p");
  tituloCapitulo.className = "novo-capitulo";
  tituloCapitulo.textContent =
    "E se a gente escrevesse um novo capítulo?";

  const pergunta = document.createElement("h2");
  pergunta.className = "pergunta-destaque";
  pergunta.textContent = "Fica comigo?";

  const detalheFinal = document.createElement("span");
  detalheFinal.className = "detalhe-final";
  detalheFinal.textContent = "✧ 💜 ✧";

  // 🌷 A frase delicada abaixo do título
const subtituloCapitulo = document.createElement("p");
subtituloCapitulo.className = "subtitulo-capitulo";
subtituloCapitulo.textContent =
  "Sem pressa. Um pedacinho de cada vez.";

perguntaFinal.append(
  tituloCapitulo,
  subtituloCapitulo,
  pergunta,
  detalheFinal

);

  revelacao.appendChild(perguntaFinal);

  // ✨ Mostra a descoberta
  revelacao.classList.remove("oculto");

  botaoDesbloquear.textContent = "Descoberta revelada 💜";
  botaoDesbloquear.disabled = true;

  iniciarChuvaDeCoracoes();
});
  
