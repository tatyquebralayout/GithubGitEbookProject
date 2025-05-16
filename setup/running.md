# Rodando o Projeto Localmente

Depois de [instalar](installation.md) o projeto e suas dependências, você pode executá-lo localmente para desenvolvimento e teste.

## Servidor de Desenvolvimento

O GitSheet utiliza o [Vite](https://vitejs.dev/) como servidor de desenvolvimento, que oferece recarregamento rápido de módulos (Hot Module Replacement - HMR) e uma excelente experiência de desenvolvimento.

Para iniciar o servidor de desenvolvimento, execute o seguinte comando no terminal, a partir do diretório raiz do projeto (`gitsheet`):

```bash
npm run dev
```

Após executar o comando, o Vite compilará o projeto e o iniciará. Você verá uma saída no terminal similar a esta:

```
  VITE vX.Y.Z  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Abra seu navegador e acesse a URL fornecida para `Local` (geralmente `http://localhost:5173/`).

O servidor de desenvolvimento monitorará as alterações nos arquivos do projeto. Qualquer modificação que você fizer no código-fonte (arquivos `.tsx`, `.ts`, `.css`, etc.) fará com que o navegador seja atualizado automaticamente, refletindo suas mudanças quase instantaneamente.

## Visualizando o Build de Produção (Opcional)

Se você quiser testar o build otimizado de produção localmente antes de fazer o deploy, você pode seguir estes passos:

1.  **Gerar o Build de Produção:**
    Execute o script de build:
    ```bash
    npm run build
    ```
    Este comando compilará o TypeScript e usará o Vite para criar uma versão otimizada dos arquivos estáticos na pasta `dist/`.

2.  **Pré-visualizar o Build:**
    Após o build ser concluído, execute o script de preview:
    ```bash
    npm run preview
    ```
    Este comando iniciará um servidor local estático que serve os arquivos da pasta `dist/`. O terminal indicará a URL para acessar a pré-visualização (geralmente em uma porta diferente da do servidor de desenvolvimento, como `http://localhost:4173/`).

Isso permite que você verifique se o build de produção está funcionando como esperado antes de implantá-lo em um ambiente de hospedagem. 