# Instalação

Após garantir que todos os [pré-requisitos](prerequisites.md) estão instalados, siga os passos abaixo para instalar o projeto GitSheet em sua máquina local:

1.  **Clonar o Repositório:**
    Abra seu terminal ou prompt de comando, navegue até o diretório onde deseja salvar o projeto e execute o seguinte comando Git para clonar o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO_GIT_DO_PROJETO_GITSHEET>
    ```
    Substitua `<URL_DO_REPOSITORIO_GIT_DO_PROJETO_GITSHEET>` pela URL correta do repositório Git do projeto.

2.  **Navegar para o Diretório do Projeto:**
    Após a clonagem ser concluída, navegue para a pasta do projeto:
    ```bash
    cd gitsheet
    ```
    (Se o nome da pasta clonada for diferente, use esse nome no comando `cd`.)

3.  **Instalar Dependências:**
    Dentro do diretório raiz do projeto (`gitsheet`), execute o seguinte comando para instalar todas as dependências listadas no arquivo `package.json`:
    ```bash
    npm install
    ```
    Este comando baixará todas as bibliotecas e ferramentas necessárias para o projeto funcionar.

    *Se preferir usar Yarn ou pnpm, você pode executar `yarn install` ou `pnpm install`, respectivamente.*

4.  **Variáveis de Ambiente (Opcional/Se Aplicável):**
    Alguns projetos podem requerer variáveis de ambiente para configurações específicas (como chaves de API, URLs de backend, etc.).
    *   Verifique se existe um arquivo chamado `.env.example` ou `.env.sample` na raiz do projeto.
    *   Se existir, copie este arquivo para um novo arquivo chamado `.env`:
        ```bash
        cp .env.example .env
        ```
    *   Abra o arquivo `.env` em um editor de texto e preencha as variáveis com os valores apropriados para seu ambiente local.

    *Com base na análise atual, não foi identificado um arquivo `.env.example` proeminente, então este passo pode não ser necessário para a configuração básica. Consulte o `.gitignore` para ver se arquivos `.env` são ignorados, o que é uma prática comum.* 

Após esses passos, o projeto GitSheet estará instalado e pronto para ser executado em seu ambiente de desenvolvimento. 