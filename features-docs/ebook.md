# Documentação da Feature: Página de Vendas do Ebook

A feature "Ebook" consiste em uma página de destino (landing page) projetada para promover e vender um e-book intitulado "Git & GitHub: Do Iniciante ao Profissional Avançado". Seu objetivo é apresentar os benefícios, conteúdo e estrutura do e-book aos potenciais leitores e incentivá-los à compra.

A página é implementada como um componente React (`EbookContent.tsx`) e utiliza Tailwind CSS para estilização. O conteúdo é predominantemente estático, incluindo seções como:
*   Hero Section com título, descrição e chamada para ação.
*   Destaque de projetos práticos relacionados ao conteúdo do e-book.
*   Visão geral do que será aprendido.
*   Estrutura inicial dos capítulos do e-book.

## Principais Componentes

*   `src/features/ebook/EbookPage.tsx`: Componente de página que serve como ponto de entrada para a visualização da página de vendas do ebook. Ele simplesmente renderiza o `EbookContent`.
*   `src/features/ebook/components/EbookContent.tsx`: Este é o componente central que contém toda a estrutura HTML (JSX) e o conteúdo textual da página de vendas do e-book. Ele utiliza ícones da biblioteca `lucide-react` para elementos visuais.
*   `src/features/ebook/hooks/`: Atualmente não contém hooks customizados para esta feature.
*   `src/features/ebook/utils/`: Atualmente não contém utilitários customizados para esta feature.
*   `src/features/ebook/constants.ts`: Atualmente não contém constantes definidas para esta feature.

## Fluxo de Dados

O conteúdo da página de vendas é estático e definido diretamente no componente `EbookContent.tsx`. Não há carregamento de dados de fontes externas (como APIs ou arquivos Markdown) para esta página específica. A principal interatividade é um botão de call-to-action para "compra", que presumivelmente redirecionaria o usuário para uma plataforma de pagamento ou página de checkout (a lógica exata do botão não foi totalmente analisada, mas é o principal ponto de interação dinâmico).

## Notas Adicionais

*   A feature, como implementada atualmente, foca na promoção do e-book e não na exibição do seu conteúdo interativo dentro da aplicação GitSheet.
*   A estilização é feita com Tailwind CSS, e ícones são providos por `lucide-react`.
*   Para futuras expansões, se o e-book fosse integrado para leitura dentro do app, seria necessária uma estrutura de dados, componentes de navegação e renderização de conteúdo mais complexos.
*   O botão "Garantir Minha Cópia por R$ 97,00" é um elemento chave que necessitaria de uma integração com um sistema de pagamento ou redirecionamento adequado. 