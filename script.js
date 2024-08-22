let caixaPrincipal = document.querySelector('.caixa-principal');
let caixaPerguntas = document.querySelector('.caixa-perguntas');
let caixaAlternativas = document.querySelector('.caixa-alternativas');
let caixaResultado = document.querySelector('.caixa-resultado');
let textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Pergunta 1 - Você acha que o uso das plataformas está auxiliando no aprendizado?",
        alternativas: [
            {
                texto: "Sim, serve como um grande suporte",
                afirmacao: "Afirmação",
            },
            {
                texto: "Não, apenas uma obrigação e servindo apenas como certificação.",
                afirmacao: "Afirmação",
            }

        ]
    },
    {
        enunciado: "Pergunta 2 - Os materiais educativos digitais podem ser personalizados para atender melhor às necessidades individuais de aprendizagem?",
        alternativas: [
            {
                texto: "A personalização dos recursos digitais pode proporcionar uma experiência de aprendizagem mais inclusiva e eficaz.",
                afirmacao: "Afirmação",
            },
            {
                texto: "A variedade de adaptações pode sobrecarregar e confundir os estudantes.",
                afirmacao: "Afirmação",
            }
        ]

    },
    {
        enunciado: "Pergunta 3 - Qual é, na sua opinião, o impacto das tecnologias e da disponibilidade de materiais educativos na educação?",
        alternativas: [
            {
                texto: "As tecnologias estão democratizando o acesso ao conhecimento e permitindo métodos de aprendizagem mais interativos e personalizados.",
                afirmacao: "Afirmação",
            },
            {
                texto: "A disponibilidade de materiais educativos online está facilitando a atualização constante de conteúdos e promovendo colaboração global entre estudantes e educadores.",
                afirmacao: "Afirmação",
            }
        ]

    }
];

let atual = 0;
let perguntaAtual;
historiaFinal = "";

function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "  ";
        atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "As suas escolhas foram:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();