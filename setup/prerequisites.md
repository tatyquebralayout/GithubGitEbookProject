# Pré-requisitos

Antes de iniciar a configuração do projeto GitSheet, certifique-se de que possui os seguintes softwares instalados e configurados em seu sistema:

*   **Node.js:**
    *   **Versão:** 18.x ou superior (recomendado utilizar a versão LTS mais recente).
    *   **Verificação:** Você pode verificar sua versão do Node.js abrindo o terminal e executando `node -v`.
    *   **Instalação:** Se não tiver o Node.js instalado, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

*   **Gerenciador de Pacotes (npm, yarn, ou pnpm):**
    *   O Node.js já vem com o **npm** (Node Package Manager).
    *   **Versão npm:** Recomenda-se npm v9+ (verifique com `npm -v`).
    *   Alternativamente, você pode usar [Yarn](https://yarnpkg.com/) (v1.22+) ou [pnpm](https://pnpm.io/) (v8+).
    *   O projeto utiliza `npm` como padrão nos scripts do `package.json` (ex: `npm install`, `npm run dev`), mas outros gerenciadores de pacotes devem funcionar para instalar dependências e executar os scripts (adaptando os comandos, ex: `yarn install`, `pnpm run dev`).

*   **Git:**
    *   Como o GitSheet é um projeto sobre Git, é essencial ter o Git instalado para clonar o repositório e para controle de versão durante o desenvolvimento.
    *   **Verificação:** Execute `git --version` no terminal.
    *   **Instalação:** Baixe o Git em [git-scm.com](https://git-scm.com/downloads).

Com esses pré-requisitos atendidos, você estará pronto para prosseguir com a instalação do projeto. 