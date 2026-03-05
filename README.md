# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Resumo de Atualizações: MentoraMed

Este documento detalha as principais melhorias implementadas nas seções de **Blog** e **Chatbot**.

---

## Chatbot Inteligente (Google Gemini)

O sistema de chat foi totalmente atualizado para utilizar a infraestrutura do Google Gemini.

*   **Melhoria**: Respostas mais rápidas, precisas e com melhor contexto sobre os serviços da MentoraMed.
*   **Configuração**:
    *   Implementação da variável `VITE_GEMINI_API_KEY` no `.env`.
    *   Atualização técnica nos arquivos Docker para suporte à nova integração.

---

## Blog: Organização e Interface

A estrutura do blog foi reformulada para ser mais profissional e fácil de manter.

### 1. Organização Técnica
*   **Padronização**: Todos os posts agora estão centralizados na pasta `src/pages/BlogPosts/`.
*   **Limpeza**: O código ficou mais limpo, separando a lógica de exibição do conteúdo de cada postagem.

### 2. Melhorias de UI/UX (Interface)
*   **Leitura Confortável**: O modal de blog foi ajustado para evitar que o texto pareça "solto" na tela, com melhor contraste de cores.
*   **Filtros Diretos**: Remoção de filtros vazios ou redundantes (como o botão "Todos"), tornando a navegação mais objetiva.
*   **Responsividade**: Ajustes finos para garantir que os posts sejam lidos perfeitamente em celulares e tablets.
