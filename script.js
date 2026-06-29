const tripStart = new Date("2026-06-30T11:50:00-03:00");

const days = [
  {
    date: "30/06, ter",
    title: "Chegada + vila",
    items: [
      "Voo CGH -> REC e retirada do carro as 16:00.",
      "Deslocamento sem pressa ate Porto de Galinhas.",
      "Check-in, mercado rapido e jantar leve na vila.",
      "Foto no letreiro se todo mundo ainda tiver energia."
    ],
    note: "Dia de baixar a rotacao. Nada de passeio grande."
  },
  {
    date: "01/07, qua",
    title: "Piscinas naturais",
    items: [
      "Jangada nas piscinas naturais, priorizando o melhor horario da mare baixa.",
      "Comprar agua antes de embarcar, como dica do video.",
      "Tarde livre na praia central ou piscina da hospedagem.",
      "Noite: rua Beijupira, Beco dos Passarinhos e feirinha."
    ],
    note: "Passeio essencial: fazer cedo na viagem para garantir."
  },
  {
    date: "02/07, qui",
    title: "Muro Alto",
    items: [
      "Manha em Muro Alto, praia tipo piscina gigante para as criancas.",
      "Chegar cedo e mirar a mare baixa.",
      "Almoco de praia com estrutura simples.",
      "Fim de tarde livre para descanso."
    ],
    note: "Perfeito para familia: agua calma, rasa e quentinha."
  },
  {
    date: "03/07, sex",
    title: "Buggy ponta a ponta",
    items: [
      "Manha tranquila, sem compromisso pesado.",
      "Buggy a tarde passando por Cupe, Muro Alto, Maracaipe e Camboa.",
      "Parada no coqueral de Maracaipe para fotos.",
      "Por do sol no Pontal ou Camboa, seguindo dica do bugueiro."
    ],
    note: "No video, o contrafluxo em Camboa rendeu por do sol mais vazio."
  },
  {
    date: "04/07, sab",
    title: "Carneiros",
    items: [
      "Bate-volta para Praia dos Carneiros.",
      "Escolher base com boa estrutura para banheiro, sombra e almoco.",
      "Catamara opcional: bancos de areia, banho de argila e capelinha.",
      "Voltar antes de cansar as criancas."
    ],
    note: "Dia lindo, mas mais logistica. Sair cedo ajuda muito."
  },
  {
    date: "05/07, dom",
    title: "Dia leve",
    items: [
      "Manha de piscina, praia proxima ou nada planejado.",
      "Lavanderia, compras e reorganizacao das malas.",
      "Soneca sem culpa para adultos e criancas.",
      "Jantar escolhido na hora."
    ],
    note: "Esse dia protege o resto da viagem."
  },
  {
    date: "06/07, seg",
    title: "Maracaipe + Pontal",
    items: [
      "Praia de Maracaipe em ritmo leve.",
      "Coqueral e fotos nos balancos/cenarios.",
      "Passeio opcional de jangada para cavalos-marinhos.",
      "Por do sol no Pontal de Maracaipe."
    ],
    note: "Bom dia para repetir a vibe mais bonita do video."
  },
  {
    date: "07/07, ter",
    title: "Maragogi opcional",
    items: [
      "Se o grupo acordar animado: bate-volta para Maragogi e Gales.",
      "Se parecer cansativo: trocar por Cupe + descanso.",
      "Decisao depende de mare, clima e energia das criancas.",
      "Evitar emendar com outro dia de estrada longa."
    ],
    note: "Colocado como opcional de verdade, nao como obrigacao."
  },
  {
    date: "08/07, qua",
    title: "Recife + Olinda",
    items: [
      "Recife Antigo: Marco Zero, Paco do Frevo ou Cais do Sertao.",
      "Olinda: Alto da Se, ladeiras e casinhas coloridas.",
      "Boa Viagem so como passagem/foto se fizer sentido.",
      "Voltar para Porto ou dormir cedo pensando na reta final."
    ],
    note: "Excelente para dia nublado ou para variar de praia."
  },
  {
    date: "09/07, qui",
    title: "Favoritos + compras",
    items: [
      "Repetir a praia campea da viagem: Muro Alto, Centro ou Maracaipe.",
      "Comprinhas na vila e lembrancas na feirinha.",
      "Separar documentos, roupas do voo e snacks das criancas.",
      "Jantar de despedida sem horario apertado."
    ],
    note: "Ultimo dia cheio: melhor repetir o que funcionou."
  },
  {
    date: "10/07, sex",
    title: "Retorno",
    items: [
      "Manha curta: cafe, check-out e estrada para Recife.",
      "Devolver o carro antes do embarque, mesmo que a reserva conste 16:00.",
      "Voo REC -> GRU as 12:50 conforme voucher.",
      "Conferir horario real da locadora e do voo antes de sair."
    ],
    note: "Atencao: o voucher do carro fala devolucao as 16:00, mas o voo sai 12:50. Vale ajustar com a locadora."
  }
];

const checks = [
  ["Documentos", "RG/CNH fisicos, cartoes e comprovantes dos vouchers."],
  ["Voo", "Check-in GOL com codigo JFUTDK e reserva Decolar 934209339000."],
  ["Carro", "CNH fisica, cartao de credito do condutor e voucher Rentcars."],
  ["Criancas", "Lanche, garrafa, muda extra, remedios e brinquedo pequeno."],
  ["Praia", "Protetor, camiseta UV, bone, chinelo, toalha compacta."],
  ["Passeios", "Dinheiro/cartao para jangada, estacionamento e fotos."],
  ["Casa", "Fechar lixeira, geladeira, tomadas e combinar plantas/pets."],
  ["Digital", "Baixar mapas offline, playlists e PDFs dos vouchers."]
];

function updateCountdown() {
  const el = document.getElementById("countdown");
  const diff = tripStart - new Date();
  if (diff <= 0) {
    el.textContent = "A viagem comecou";
    return;
  }
  const daysLeft = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  el.textContent = `${daysLeft}d ${hours}h ${minutes}min`;
}

function renderDays() {
  const rail = document.getElementById("dayRail");
  rail.innerHTML = days.map((day, index) => `
    <article class="dayCard">
      <time>${index < 10 ? `Dia ${index + 1}` : "Retorno"} - ${day.date}</time>
      <h3>${day.title}</h3>
      <ul>${day.items.map(item => `<li>${item}</li>`).join("")}</ul>
      <p class="note">${day.note}</p>
    </article>
  `).join("");
}

function renderChecks() {
  const saved = JSON.parse(localStorage.getItem("portoChecks") || "{}");
  const grid = document.getElementById("checkGrid");
  const status = document.getElementById("saveStatus");
  grid.innerHTML = checks.map(([title, body], index) => `
    <label class="checkItem">
      <input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""} />
      <span><strong>${title}</strong>${body}</span>
    </label>
  `).join("");
  grid.addEventListener("change", event => {
    if (!event.target.matches("input[type='checkbox']")) return;
    const current = JSON.parse(localStorage.getItem("portoChecks") || "{}");
    current[event.target.dataset.check] = event.target.checked;
    localStorage.setItem("portoChecks", JSON.stringify(current));
    const total = Object.values(current).filter(Boolean).length;
    status.textContent = `Salvo neste navegador: ${total} de ${checks.length} itens marcados.`;
  });
  const total = Object.values(saved).filter(Boolean).length;
  status.textContent = total ? `Salvo neste navegador: ${total} de ${checks.length} itens marcados.` : "Status: pronto para marcar.";
}

function weatherLabel(code) {
  if ([0, 1].includes(code)) return "sol";
  if ([2, 3].includes(code)) return "nuvens";
  if ([45, 48].includes(code)) return "neblina";
  if ([51, 53, 55, 56, 57].includes(code)) return "garoa";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "chuva";
  if ([95, 96, 99].includes(code)) return "trovoada";
  return "variavel";
}

async function loadWeather() {
  const list = document.getElementById("weatherList");
  const url = "https://api.open-meteo.com/v1/forecast?latitude=-8.5069&longitude=-35.0050&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FRecife&start_date=2026-06-30&end_date=2026-07-10";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("weather unavailable");
    const data = await response.json();
    list.innerHTML = data.daily.time.slice(0, 6).map((date, i) => {
      const short = new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" });
      return `
        <article class="weatherItem">
          <strong>${short}</strong>
          <span>${Math.round(data.daily.temperature_2m_min[i])}° - ${Math.round(data.daily.temperature_2m_max[i])}°C</span>
          <span>${weatherLabel(data.daily.weather_code[i])} · ${data.daily.precipitation_probability_max[i] ?? 0}% chuva</span>
        </article>
      `;
    }).join("");
  } catch {
    list.innerHTML = [
      ["30/06", "24° - 29°C", "chuvas rapidas possiveis"],
      ["01/07", "24° - 29°C", "tempo tropical"],
      ["02/07", "24° - 29°C", "levar capa leve"],
      ["03/07", "24° - 30°C", "sol entre nuvens"]
    ].map(([d, t, s]) => `<article class="weatherItem"><strong>${d}</strong><span>${t}</span><span>${s}</span></article>`).join("");
  }
}

renderDays();
renderChecks();
updateCountdown();
loadWeather();
setInterval(updateCountdown, 60000);
