import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SYSTEM_PROMPT = `Você é o assistente virtual da MentoraMed, uma plataforma digital de saúde corporativa brasileira.

Seu papel é atender colaboradores, gestores de RH e empresas que buscam soluções em:

1. TELEMEDICINA
   - Consultas médicas online com agilidade e sigilo
   - Telepsicologia para colaboradores
   - Integração de prontuários e resultados para monitoramento estratégico
   - Agendamento fácil e rápido de consultas

2. SAÚDE MENTAL CORPORATIVA
   - Programas de bem-estar emocional para equipes
   - Acompanhamento psicológico individual e em grupo
   - Prevenção de burnout e gestão do estresse
   - Relatórios anônimos de saúde emocional da empresa

3. SST – SAÚDE E SEGURANÇA DO TRABALHO
   - Laudos e documentos obrigatórios (PCMSO, PPRA, PGR, LTCAT)
   - ASOs (Atestados de Saúde Ocupacional)
   - Conformidade com NRs e legislação trabalhista
   - Gestão de afastamentos e reabilitação

DIRETRIZES DE ATENDIMENTO:
- Seja empático, claro e objetivo
- Use linguagem acessível, sem jargões médicos desnecessários
- Nunca forneça diagnósticos médicos — apenas oriente o usuário a buscar atendimento
- Se o usuário demonstrar urgência ou crise de saúde mental, indique imediatamente o CVV (188) e recomende atendimento presencial
- Mantenha o contexto da conversa — não recomece a saudação se já cumprimentou
- Ao final de respostas sobre serviços, faça UMA pergunta qualificadora para entender melhor a necessidade do usuário
- Não invente preços ou prazos — diga que um consultor entrará em contato para detalhes comerciais

IDENTIDADE:
- Nome: Assistente MentoraMed
- Tom: profissional, acolhedor e confiante
- Idioma: sempre português brasileiro`;

const initialMessages = [
  {
    sender: "bot",
    text: "Olá! Sou o assistente da MentoraMed. Posso ajudar você a entender como nossa solução atua em saúde mental corporativa, SST ou telemedicina. Sobre o que você gostaria de conversar?",
  },
];

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const callGemini = async (userMessage) => {
    const updatedHistory = [
      ...conversationHistory,
      { role: "user", parts: [{ text: userMessage }] },
    ];

    const body = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: updatedHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
      },
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err?.error?.message || "Erro na API Gemini");
    }

    const data = await response.json();
    const botText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Desculpe, não consegui gerar uma resposta. Tente novamente.";

    setConversationHistory([
      ...updatedHistory,
      { role: "model", parts: [{ text: botText }] },
    ]);

    return botText;
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    setIsLoading(true);

    try {
      const botText = await callGemini(trimmed);
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch (error) {
      console.error("Gemini error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Ops! Tive um problema para me conectar. Por favor, tente novamente em instantes.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">M</div>
              <div>
                <span className="chatbot-title">MentoraMed Assistant</span>
                <span className="chatbot-status">● Online</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Fechar">✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.sender}`}>
                <div className="chatbot-bubble">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message bot">
                <div className="chatbot-bubble chatbot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              className="chatbot-send"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              aria-label="Enviar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
