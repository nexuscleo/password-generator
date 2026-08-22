# 🛡️ Gerador de Senhas | Password Generator

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![MUI](https://img.shields.io/badge/MUI_Material-6.4.5-007FFF?style=for-the-badge&logo=mui)
![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)

Uma aplicação web moderna, ultra-rápida e segura para geração local de senhas fortes e personalizáveis. Construída com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e estilizada com **Tailwind CSS v4** sob a estética **Graphite & SkyMint Glassmorphism**.

---

## 🌟 Recursos Principais (Features)

- 🔒 **Geração 100% Client-Side & Privada**: As senhas são geradas exclusivamente no navegador do usuário. Nenhum dado é enviado, trafegado ou armazenado em servidores externos.
- 🎛️ **Controle de Comprimento Flexível**:
  - Slider intuitivo para escolher tamanhos de **4 a 32 caracteres**.
  - **Atalhos rápidos (Presets)** com 1 clique para comprimentos comuns: `8`, `12`, `16`, `24` e `32` caracteres.
- ⚙️ **Regras de Caracteres Configuráveis**:
  - Inclusão/Exclusão de letras maiúsculas (`A-Z`).
  - Inclusão/Exclusão de números (`0-9`).
  - Inclusão/Exclusão de símbolos especiais (`!@#$%^&*()_+[]{}<>?`).
- 📊 **Analisador em Tempo Real de Força da Senha**:
  - Medição dinâmica de segurança categorizada em **Fraca**, **Média**, **Forte** e **Muito Forte**, acompanhada de indicador visual por cores.
- 📋 **Cópia Instantânea com 1 Clique**:
  - Integração com a API `navigator.clipboard` nativa do navegador com feedback imediato de confirmação visual (*"Copiado!"*).
- 🎨 **Interface Premium Glassmorphism UI**:
  - Design visual moderno em tom escuro (*Graphite*), detalhes luminosos de luz ambiente (*SkyMint Glowing Orbs*), bordas translúcidas e animações fluidas.
- 📱 **Totalmente Responsivo**:
  - Layout adaptado com perfeição para telas de smartphones, tablets e monitores desktop.

---

## 🛠️ Tecnologias & Arquitetura Técnica

### Tech Stack

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Base** | [Next.js 15.2.4](https://nextjs.org/) | App Router, Server/Client Component Architecture |
| **Biblioteca UI** | [React 19](https://react.dev/) | React Hooks, Estado reativo local |
| **Linguagem** | [TypeScript 5](https://www.typescriptlang.org/) | Tipagem estática rigorosa para segurança em compilação |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilitários de estilização responsiva e suporte a PostCSS |
| **Componentes/Ícones** | [@mui/material](https://mui.com/) & Emotion | Utilização de `SvgIcon` nativos para ícones vetoriais leves |

### Destaques da Engenharia de Código

1. **Custom Hook Desacoplado (`usePasswordGenerator`)**:
   - Separação clara entre a regra de negócio / estado e a interface visual. O hook gerencia a string da senha, o estado do clipboard e aciona as atualizações de geração.
2. **Utilitário Puro e Estocástico (`generatePassword`)**:
   - Função pura isolada em `src/utils/generate-password.ts` que constrói dinamicamente o pool de caracteres conforme os parâmetros selecionados e sorteia os índices de forma imprevisível.
3. **Componentização Modular**:
   - Interface segmentada em componentes autocontidos com responsabilidade única (`LengthSlider`, `PasswordOptions`, `PasswordActions`, `ShowPassword`).

---

## 📂 Estrutura do Projeto

```text
password-generator/
├── public/                     # Arquivos estáticos (favicons, imagens)
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globais e diretivas do Tailwind CSS
│   │   ├── layout.tsx          # Layout raiz da aplicação (Fontes e Metadados)
│   │   └── page.tsx            # Página principal / Container principal
│   ├── components/
│   │   ├── lenght-slider.tsx   # Slider de comprimento e botões de preset
│   │   ├── password-actions.tsx# Botão de geração e acoplador do display
│   │   ├── password-options.tsx# Toggles para maiúsculas, números e símbolos
│   │   └── show-password.tsx   # Display da senha, cópia e barra de força
│   ├── hook/
│   │   └── use-password-generator.ts # Hook customizado para estado e ações
│   └── utils/
│       └── generate-password.ts      # Algoritmo puro de geração de senhas
├── next.config.ts              # Configurações do Next.js
├── postcss.config.mjs          # Configuração do PostCSS / Tailwind
├── tsconfig.json               # Configurações do TypeScript
└── package.json                # Dependências e scripts do projeto
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 18.x ou superior recomendada)
- **npm**, **yarn** ou **pnpm**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/nexuscleo/password-generator.git
   cd password-generator
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acessar a aplicação:**
   Abra o seu navegador e acesse: [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `npm run dev`: Inicia o ambiente de desenvolvimento local com Hot Reloading.
- `npm run build`: Compila e otimiza a aplicação para produção.
- `npm run start`: Executa o servidor de produção após a compilação.
- `npm run lint`: Executa a verificação estática de código com o ESLint.

---

## 🌐 Deploy Automatizado (GitHub Actions & GitHub Pages)

Esta aplicação foi pré-configurada para **Deploy Contínuo (CI/CD)** automático no **GitHub Pages** através de **GitHub Actions**.

### 🛠️ O que foi configurado no projeto:

1. **Exportação Estática (`next.config.ts`)**:
   - Definido `output: 'export'` e `images: { unoptimized: true }` para gerar todos os arquivos estáticos HTML, CSS (Tailwind v4), scripts e estilos do MUI na pasta `./out`.
2. **Workflow CI/CD (`.github/workflows/deploy.yml`)**:
   - Compilação automática do projeto no Ubuntu em cada `push` na branch `main` ou `master`.
   - Publicação automática dos artefatos estáticos no **GitHub Pages**.

### ⚙️ Como Ativar o Deploy no GitHub:

1. Suba o projeto para o seu repositório no GitHub (`git push origin main`).
2. No GitHub, vá até o seu repositório e acesse **Settings** -> **Pages**.
3. Em **Build and deployment** -> **Source**, selecione **GitHub Actions**.
4. Pronto! Cada `push` futuro fará o build completo e publicará o site online em `https://nexuscleo.github.io/password-generator/`.

---

## 🛡️ Segurança & Privacidade

> [!IMPORTANT]
> **Política de Zero Retenção (Zero Persistence):**
> Este projeto foi projetado com foco total em privacidade.
> - Todas as operações ocorrem diretamente na memória do navegador (*Client-Side Rendering*).
> - Nenhuma senha gerada é gravada em LocalStorage, SessionStorage ou enviada para servidores de telemetria/analytics.
> - Ao fechar ou recarregar a página, os dados da senha gerada são limpos da memória.

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Se você deseja melhorar o algoritmo, adicionar novos recursos (ex: filtro de caracteres ambíguos, exportação, etc.) ou aprimorar a UI:

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua feature (`git checkout -b feature/minha-feature`).
3. Faça o **Commit** de suas alterações (`git commit -m 'Add: minha nova feature'`).
4. Envie a Branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.

---

<div align="center">
  Desenvolvido por nexus.DS usando <strong>Next.js</strong> & <strong>Tailwind CSS</strong>.
</div>
