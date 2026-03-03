import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const initialMessages = [
  {
    sender: "bot",
    text: "Olá. Sou o assistente da MentoraMed. Posso ajudar você a entender como nossa solução atua em saúde mental corporativa, SST ou telemedicina. Sobre o que você gostaria de conversar?",
  },
];

// Regex for strict email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regex for strict phone validation: At least 8 digits, optionally with + or parenthesis
const phoneRegex = /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3,5}[-\s\.]?[0-9]{4,6}$/;
// Fallback if formatting is weird but it contains at least 8 digits total
const digitsOnlyRegex = /(.*\d.*){8,}/;

const isValidContact = (input) => {
  const trimmed = input.trim();
  if (emailRegex.test(trimmed)) return true;
  if (phoneRegex.test(trimmed) || digitsOnlyRegex.test(trimmed)) return true;
  return false;
};

const autoReplies = [
  {
    keywords: ["olá", "oi", "boa tarde", "bom dia", "boa noite", "oii", "ola"],
    reply: "Olá! Como posso ajudar você hoje?",
  },
  {
    keywords: ["tudo bem", "como você está", "como vc esta", "td bem"],
    reply: "Tudo bem, obrigado por perguntar. Em que posso ajudar você?",
  },
  {
    keywords: ["obrigado", "valeu", "obrigada", "agradeço", "grato", "grata"],
    reply: "Por nada! Estou à disposição se precisar de mais informações sobre saúde mental corporativa ou SST.",
  },
  {
    keywords: ["só olhando", "apenas olhando", "depois vejo", "só de olho"],
    reply: "Perfeito. Se quiser, posso explicar como a MentoraMed ajuda empresas com saúde mental e conformidade em SST. Você já conhece nossas soluções corporativas?",
  },
  {
    keywords: ["what is", "o que é", "como funciona", "saiba", "saúde mental corporativa"],
    reply:
      "A MentoraMed é uma solução digital de saúde corporativa. Oferecemos gestão inteligente de saúde mental, conectando análises estratégicas para reduzir afastamentos e melhorar o bem-estar organizacional.\n\nVocê gostaria de entender como isso se aplica à área de RH ou aos colaboradores da sua empresa?",
  },
  {
    keywords: ["sst", "nr-01", "nr-07", "nr-17", "compliance", "regulamento", "norma", "obrigatório", "riscos"],
    reply:
      "Apoiamos sua empresa na conformidade com normas como NR-01, NR-07 e NR-17. Fazemos a gestão de riscos e fornecemos dashboards integrados para acompanhar os programas de saúde ocupacional.\n\nEssa gestão seria centralizada pelo seu departamento atual ou você ainda está estruturando a área?",
  },
  {
    keywords: ["consulta", "telemedicina", "psicologia", "médico", "telepsicologia", "agendar", "colaborador"],
    reply:
      "Oferecemos telemedicina e telepsicologia com agilidade e sigilo para os colaboradores, integrando os prontuários e resultados para o monitoramento estratégico.\n\nVocê tem interesse em nossos pacotes para a equipe ou deseja ver um panorama geral do sistema de agendamento?",
  },
  {
    keywords: ["dados", "lgpd", "segurança", "relatório", "dashboard", "indicador"],
    reply:
      "Nosso sistema centraliza exames e prontuários em um painel seguro, com conformidade total à LGPD e proteção de dados, oferecendo indicadores estratégicos ao RH.\n\nVocê busca um painel gerencial mais focado em dados clínicos ou em métricas de afastamento?",
  },
  {
    keywords: ["empresa", "contador", "parceria", "planos", "tamanho"],
    reply:
      "Desenvolvemos parcerias estratégicas e oferecemos planos adequados para diferentes portes de empresas e necessidades.\n\nComo é a realidade atual da sua empresa em relação às soluções de saúde corporativa?",
  },
  {
    keywords: ["humano", "atendente", "suporte", "orçamento", "demonstração", "contratar", "proposta", "reunião", "comercial", "preço", "valor", "comprar"],
    reply:
      "Entendo seu interesse em avançar com a MentoraMed. Para que nossa equipe especializada entre em contato e estruture uma proposta ou Demonstração ideal para você, poderia informar seu e-mail corporativo ou telefone com DDD?",
    action: "REQUEST_CONTACT_INFO",
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [botState, setBotState] = useState("NORMAL"); // "NORMAL", "AWAITING_CONTACT"

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    // Check autoReplies based on keywords
    const foundReply = autoReplies.find((rule) =>
      rule.keywords.some((keyword) => lowerInput.includes(keyword))
    );

    if (foundReply) {
      if (foundReply.action === "REQUEST_CONTACT_INFO") {
        setBotState("AWAITING_CONTACT");
      }
      return foundReply.reply;
    }

    // Conversational Fallback Strategy
    if (lowerInput.includes("rh") || lowerInput.includes("gestão")) {
      return "Para a área de gestão e RH, focamos bastante na redução do absenteísmo e em painéis orientados a dados. Você gostaria de conhecer detalhes sobre como integramos exames periódicos ou telemedicina para seu time?";
    }

    // Generic Conversational Pivot instead of "Out of reach"
    return "Compreendo. Cada organização tem necessidades particulares. Você poderia detalhar um pouco mais sobre o que procura no momento? Podemos explorar opções em saúde mental, suporte de SST ou agendamento de consultas corporativas.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate thinking delay
    setTimeout(() => {
      if (botState === "AWAITING_CONTACT") {
        if (isValidContact(userMessage.text)) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Agradeço pelas informações. Sua solicitação foi encaminhada para a equipe e eles entrarão em contato em breve para prosseguir. Posso te ajudar com alguma outra dúvida sobre nossa plataforma?",
            },
          ]);
          setBotState("NORMAL");
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Para que nossa equipe entre em contato, preciso de uma informação válida como:\n\nE-mail profissional no formato nome@empresa.com\nou\nTelefone com DDD no formato (41) 99999-9999.\n\nPoderia enviar um desses, por favor?",
            },
          ]);
        }
      } else {
        const responseText = getBotResponse(userMessage.text);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: responseText },
        ]);
      }
    }, 800);
  };

  return (
    <div className="mentoramed-chatbot-wrapper">
      {isOpen && (
        <div className="mentoramed-chatbot-window">
          <div className="mentoramed-chatbot-header">
            <div className="mentoramed-chatbot-header-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mentoramed-chatbot-bot-icon">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              MentoraMed Assistant
            </div>
            <button className="mentoramed-chatbot-close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>

          <div className="mentoramed-chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mentoramed-chatbot-message-row ${msg.sender === "user" ? "user-row" : "bot-row"
                  }`}
              >
                <div
                  className={`mentoramed-chatbot-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"
                    }`}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="mentoramed-chatbot-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="mentoramed-chatbot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button type="submit" className="mentoramed-chatbot-send-btn">
              ➤
            </button>
          </form>
        </div>
      )}

      <button className="mentoramed-chatbot-toggle-btn" onClick={toggleChat}>
        {isOpen ? (
          "✕"
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
