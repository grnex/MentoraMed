import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY)
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

FORMATAÇÃO:
- Use parágrafos curtos e objetivos
- Quando listar itens, use bullet points com "•"
- Destaque termos importantes com **negrito**

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

/**
 * Simple markdown-like formatter for bot responses.
 * Handles: **bold**, bullet points (• or -), and paragraphs.
 */
function formatBotMessage(text) {
  if (!text) return null;

  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((paragraph, pIdx) => {
    const lines = paragraph.split("\n");

    const formattedLines = lines.map((line, lIdx) => {
      // Check if it's a bullet point
      const bulletMatch = line.match(/^\s*[•\-\*]\s+(.*)$/);
      if (bulletMatch) {
        return (
          <li key={lIdx} className="chatbot-list-item">
            {formatInlineText(bulletMatch[1])}
          </li>
        );
      }
      return (
        <span key={lIdx}>
          {formatInlineText(line)}
          {lIdx < lines.length - 1 && <br />}
        </span>
      );
    });

    // If this paragraph has bullet items, wrap in <ul>
    const hasBullets = lines.some((l) => /^\s*[•\-\*]\s+/.test(l));
    if (hasBullets) {
      return (
        <ul key={pIdx} className="chatbot-bullet-list">
          {formattedLines}
        </ul>
      );
    }

    return (
      <p key={pIdx} className="chatbot-paragraph">
        {formattedLines}
      </p>
    );
  });
}

/**
 * Handles **bold** inline formatting.
 */
function formatInlineText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [apiKeyMissing] = useState(!GEMINI_API_KEY);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const callGemini = async (userMessage) => {
    if (apiKeyMissing) {
      throw new Error("API_KEY_MISSING");
    }

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
      console.error("Gemini API Error:", err);
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
      const errorMessage =
        error.message === "API_KEY_MISSING"
          ? "⚠️ Chave da API não configurada. Por favor, configure a variável VITE_GEMINI_API_KEY no arquivo .env"
          : "Ops! Tive um problema para me conectar. Por favor, tente novamente em instantes.";
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: errorMessage },
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
    <div className="mentoramed-chatbot-wrapper">
      <button
        className="mentoramed-chatbot-toggle-btn"
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
        <div className="mentoramed-chatbot-window">
          <div className="mentoramed-chatbot-header">
            <div className="mentoramed-chatbot-header-title">
              <div className="mentoramed-chatbot-bot-icon">
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bruswick-green, #0A5046)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>M</div>
              </div>
              <div>
                <span style={{ display: 'block' }}>Assistente MentoraMed</span>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>● Online</span>
              </div>
            </div>
            <button className="mentoramed-chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Fechar">✕</button>
          </div>

          <div className="mentoramed-chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`mentoramed-chatbot-message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                <div className={`mentoramed-chatbot-bubble ${msg.sender}-bubble`}>
                  {msg.sender === 'bot' ? formatBotMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mentoramed-chatbot-message-row bot-row">
                <div className="mentoramed-chatbot-bubble bot-bubble">
                  <div className="chatbot-typing">
                    <span className="chatbot-typing-dot"></span>
                    <span className="chatbot-typing-dot"></span>
                    <span className="chatbot-typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="mentoramed-chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              className="mentoramed-chatbot-input"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              className="mentoramed-chatbot-send-btn"
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
    </div>
  );
}
