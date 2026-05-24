const fragrances = {
  juquinha: {
    name: "Juquinha",
    family: "Floral amadeirada",
    image: "assets/graces/perfume-juquinha.png.png",
    imageAlt: "Perfume Juquinha da colecao Tres Gracas",
    tag: "Destaque da vitrine",
    personality: "Forte, delicada e memoravel",
    impression: "Elegancia com profundidade",
    description:
      "Juquinha combina estrutura verde, textura floral e uma presenca elegante que conversa muito bem com o visual forte do frasco.",
    accords: ["notas verdes", "floral suave", "madeira cremosa"],
    quote: "Um perfume com presenca visual e sensorial desde o primeiro olhar.",
  },
  lorena: {
    name: "Lorena",
    family: "Doce, intensa e moderna",
    image: "assets/graces/perfume-lorena.png.png",
    imageAlt: "Perfume Lorena da colecao Tres Gracas",
    tag: "Destaque Natura",
    personality: "Vibrante, emocional e marcante",
    impression: "Contraste sofisticado",
    description:
      "Lorena tem um visual de alto impacto e uma leitura mais intensa, perfeita para uma vitrine que precisa chamar atencao imediatamente.",
    accords: ["frutas marcantes", "acorde quente", "fundo envolvente"],
    quote: "Um destaque que traz energia, cor e assinatura propria.",
  },
  arminda: {
    name: "Arminda",
    family: "Intensa e especiada",
    image: "assets/graces/perfume-arminda.png.png",
    imageAlt: "Perfume Arminda da colecao Tres Gracas",
    tag: "Edicao especial",
    personality: "Sofisticada e misteriosa",
    impression: "Presenca noturna",
    description:
      "Arminda carrega profundidade e dramaticidade. E uma fragrancia que ganha ainda mais forca quando apresentada em uma vitrine de luxo.",
    accords: ["especiarias", "madeiras escuras", "fundo ambarado"],
    quote: "Visual poderoso para uma leitura mais intensa da colecao.",
  },
  gerluce: {
    name: "Gerluce",
    family: "Elegante e envolvente",
    image: "assets/graces/perfume-gerluce.png.png",
    imageAlt: "Perfume Gerluce da colecao Tres Gracas",
    tag: "Assinatura feminina",
    personality: "Segura, refinada e expressiva",
    impression: "Elegancia com calor",
    description:
      "Gerluce equilibra riqueza cromatica, brilho e sofisticao. Funciona muito bem em uma seccao institucional ou de assinatura da campanha.",
    accords: ["floral rico", "acorde quente", "acabamento elegante"],
    quote: "Uma presenca feminina que ocupa o espaco com naturalidade.",
  },
  maggye: {
    name: "Maggye",
    family: "Suave e luminosa",
    image: "assets/graces/perfume-maggye.png.png",
    imageAlt: "Perfume Maggye da colecao Tres Gracas",
    tag: "Essencia natural",
    personality: "Leve, acolhedora e delicada",
    impression: "Clareza e conforto",
    description:
      "Maggye oferece uma entrada mais leve na colecao, com visual claro e sensacao de cuidado delicado, excelente para vitrines mais suaves.",
    accords: ["flores claras", "toque dourado", "fundo macio"],
    quote: "Um respiro de suavidade dentro de uma campanha forte.",
  },
  lucelia: {
    name: "Lucelia",
    family: "Floral frutada",
    image: "assets/graces/perfume-lucelia.png.png",
    imageAlt: "Perfume Lucelia da colecao Tres Gracas",
    tag: "Ousadia moderna",
    personality: "Romantica, fresca e contemporanea",
    impression: "Delicadeza com personalidade",
    description:
      "Lucelia traduz frescor e feminilidade em uma imagem mais romantica. E uma fragrancia muito boa para trazer variedade visual na grade.",
    accords: ["frutas suaves", "floral rosado", "acabamento leve"],
    quote: "Uma interpretacao mais leve e atual do universo Tres Gracas.",
  },
  zenilda: {
    name: "Zenilda",
    family: "Classica e sofisticada",
    image: "assets/graces/perfume-zenilda.png.png",
    imageAlt: "Perfume Zenilda da colecao Tres Gracas",
    tag: "Luxo classico",
    personality: "Refinada, serena e valiosa",
    impression: "Presenca premium",
    description:
      "Zenilda fecha a colecao com uma leitura mais nobre. O dourado do frasco reforca luxo, exclusividade e elegancia atemporal.",
    accords: ["floral elegante", "musk macio", "fundo luxuoso"],
    quote: "Um perfume com aparencia de joia dentro da colecao.",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const productCards = document.querySelectorAll(".product-card");
const spotlightImage = document.querySelector("#spotlight-image");
const spotlightImageBox = document.querySelector(".spotlight__image-box");
const spotlightTag = document.querySelector("#spotlight-tag");
const spotlightName = document.querySelector("#spotlight-name");
const spotlightFamily = document.querySelector("#spotlight-family");
const spotlightPersonality = document.querySelector("#spotlight-personality");
const spotlightImpression = document.querySelector("#spotlight-impression");
const spotlightDescription = document.querySelector("#spotlight-description");
const spotlightAccords = document.querySelector("#spotlight-accords");
const spotlightQuote = document.querySelector("#spotlight-quote");
const interestForm = document.querySelector(".interest-form");
const formNote = document.querySelector(".form-note");
const messageOutput = document.querySelector(".message-output");
const revealItems = document.querySelectorAll(".reveal");

function updateSpotlight(key) {
  const fragrance = fragrances[key];

  if (!fragrance) {
    return;
  }

  spotlightImage.src = fragrance.image;
  spotlightImage.alt = fragrance.imageAlt;
  spotlightImageBox?.setAttribute("data-fragrance", key);
  spotlightTag.textContent = fragrance.tag;
  spotlightName.textContent = fragrance.name;
  spotlightFamily.textContent = fragrance.family;
  spotlightPersonality.textContent = fragrance.personality;
  spotlightImpression.textContent = fragrance.impression;
  spotlightDescription.textContent = fragrance.description;
  spotlightQuote.textContent = `"${fragrance.quote}"`;
  spotlightAccords.innerHTML = fragrance.accords.map((accord) => `<li>${accord}</li>`).join("");

  productCards.forEach((card) => {
    const isActive = card.dataset.fragrance === key;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.matches("a") && siteNav.classList.contains("is-open")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    updateSpotlight(card.dataset.fragrance);
  });
});

async function copyMessage(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  const tempField = document.createElement("textarea");
  tempField.value = text;
  tempField.setAttribute("readonly", "");
  tempField.style.position = "fixed";
  tempField.style.opacity = "0";
  document.body.appendChild(tempField);
  tempField.select();

  let copied = false;

  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  tempField.remove();
  return copied;
}

interestForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(interestForm);
  const nome = formData.get("nome")?.toString().trim();
  const telefone = formData.get("telefone")?.toString().trim();
  const fragrancia = formData.get("fragrancia")?.toString().trim();
  const mensagem = formData.get("mensagem")?.toString().trim();

  const text = [
    "Ola, Graces! Quero atendimento sobre a colecao Natura Tres Gracas.",
    nome ? `Nome: ${nome}` : "",
    telefone ? `WhatsApp: ${telefone}` : "",
    fragrancia ? `Fragrancia favorita: ${fragrancia}` : "",
    mensagem ? `O que procuro: ${mensagem}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (messageOutput) {
    messageOutput.hidden = false;
    messageOutput.value = text;
  }

  const copied = await copyMessage(text);
  formNote.textContent = copied
    ? "Mensagem copiada. Agora e so colar no WhatsApp ou no canal de atendimento da Graces."
    : "Mensagem pronta. Se preferir, copie o texto abaixo e envie pelo canal de atendimento.";
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

updateSpotlight("juquinha");
