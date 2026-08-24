import type { ExerciseList } from "../App";

type Questionario = ExerciseList;

export const questionarioMock = [
  {
    exercise: "Exercício 1",
    questions: [
      {
        question:
          "Qual é a principal função da ferramenta VLibras integrada ao site?",
        option1:
          "Traduzir conteúdos digitais do português para a Língua Brasileira de Sinais (Libras).",
        option2:
          "Aumentar a velocidade de carregamento dos vídeos e textos do site.",
        option3:
          "Substituir o uso de legendas por áudio descritivo em tempo real.",
        option4:
          "Disponibilizar o conteúdo do site em múltiplos idiomas estrangeiros.",
        option5:
          "Permitir que o usuário navegue pelo site utilizando apenas comandos de voz.",
        answer: "option1",
        explanation:
          "Conforme o texto, o VLibras é uma ferramenta gratuita que traduz conteúdos digitais (textos e vídeos) do português para a Língua Brasileira de Sinais (Libras).",
      },
      {
        question:
          "Como o usuário deve proceder para ativar e utilizar a tradução do VLibras na página?",
          option1:
          "Enviar um formulário de solicitação para que o assistente virtual seja carregado no navegador.",
          option2:
          "Dar um duplo clique em qualquer parte em branco da tela e ditar o texto em voz alta.",
          option3:
          "Acessar as configurações do sistema operacional e ativar o recurso de acessibilidade global.",
          option4:
          "Atualizar a página e pressionar uma combinação específica de teclas de atalho.",
          option5:
          "Clicar no ícone azul de acessibilidade (mãozinhas), aguardar o avatar e selecionar ou passar o mouse sobre o texto.",
        answer: "option5",
        explanation:
          "O texto instrui que, para usar a ferramenta, basta clicar no ícone azul de acessibilidade no canto da tela, aguardar o avatar aparecer e selecionar ou passar o mouse sobre o texto que deseja traduzir.",
      },
    ],
  },
  {
    exercise: "Exercício 2",
    questions: [
      {
        question: "Qual é a principal função de uma rede de computadores?",
        option1:
          "Permitir a comunicação e o compartilhamento de informações entre dispositivos.",
        option2: "Substituir sistemas operacionais.",
        option3: "Aumentar a capacidade física dos computadores.",
        option4: "Criar componentes eletrônicos.",
        option5: "Eliminar a necessidade da internet.",
        answer: "option1",
        explanation:
          "As redes de computadores têm como principal objetivo permitir a comunicação e a troca de informações entre dispositivos.",
      },
      {
        question:
          "Qual equipamento é responsável por encaminhar pacotes de dados entre diferentes redes?",
        option1: "Switch",
        option2: "Impressora",
        option3: "Roteador",
        option4: "Monitor",
        option5: "Scanner",
        answer: "option3",
        explanation:
          "O roteador é o equipamento responsável por conectar diferentes redes e encaminhar pacotes de dados.",
      },

      {
        question: "O que significa a sigla LAN?",
        option1: "Large Access Network",
        option2: "Local Area Network",
        option3: "Long Area Network",
        option4: "Logical Access Network",
        option5: "Local Application Network",
        answer: "option2",
        explanation:
          "LAN significa Local Area Network, uma rede local utilizada em ambientes como casas e escritórios.",
      },

      {
        question:
          "Qual conjunto de protocolos é amplamente utilizado para comunicação na internet?",
        option1: "HTTP/HTTPS",
        option2: "FTP/SSH",
        option3: "SMTP/POP3",
        option4: "TCP/IP",
        option5: "DNS/DHCP",
        answer: "option4",
        explanation:
          "O conjunto TCP/IP é a base da comunicação entre dispositivos conectados à internet.",
      },

      {
        question:
          "Qual recurso ajuda a proteger uma rede contra acessos não autorizados?",
        option1: "Firewall",
        option2: "Switch",
        option3: "Cabo de rede",
        option4: "Placa de vídeo",
        option5: "Processador",
        answer: "option1",
        explanation:
          "O firewall monitora e controla o tráfego de rede, ajudando a impedir acessos indevidos.",
      },
    ],
  },
] satisfies Questionario[];
