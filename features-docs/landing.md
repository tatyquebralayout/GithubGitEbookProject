# Feature: Landing Page

**Localização:** `src/features/landing/`

## Propósito

A Landing Page é a página inicial da aplicação GitSheet. Seu objetivo é apresentar o projeto aos usuários, destacar seus benefícios, mostrar as principais seções/funcionalidades e incentivar o engajamento.

## Estrutura de Arquivos

```
src/features/landing/
├── components/ # Componentes específicos da Landing Page
│   ├── AboutProject.tsx
│   ├── Benefits.tsx
│   ├── CallToAction.tsx
│   ├── FAQ.tsx
│   ├── FeaturesOverview.tsx
│   ├── HeroSection.tsx
│   ├── Interactive элементов.tsx # (Nome com caracteres especiais, pode ser typo)
│   ├── Mission.tsx
│   ├── QuickStart.tsx
│   ├── SocialProof.tsx
│   ├── TechStack.tsx
│   └── Testimonials.tsx
├── hooks/ # Hooks (vazio atualmente)
├── utils/ # Utilitários (vazio atualmente)
├── LandingPage.tsx # Componente principal da página
└── README.md # Descrição da feature (atualmente placeholder)
```

## Componente Principal: `LandingPage.tsx`

Este é o contêiner que monta todas as seções da landing page.

```tsx
// src/features/landing/LandingPage.tsx
import AboutProject from './components/AboutProject';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import FeaturesOverview from './components/FeaturesOverview';
import HeroSection from './components/HeroSection';
import InteractiveElements from './components/Interactiveelements'; // Nome corrigido aqui
import Mission from './components/Mission';
import QuickStart from './components/QuickStart';
import SocialProof from './components/SocialProof';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';

const LandingPage = () => {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <HeroSection />
      <AboutProject />
      <Mission />
      <FeaturesOverview />
      <InteractiveElements />
      <Benefits />
      <QuickStart />
      <TechStack />
      <SocialProof /> 
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
```

**Observações:**
*   A página é composta por uma série de componentes de seção, cada um focado em um aspecto da apresentação do GitSheet.
*   O `div` principal usa classes `space-y-*` do Tailwind para adicionar espaçamento vertical entre as seções.
*   O nome do componente `Interactive elementos.tsx` (com espaço e acento) é problemático e provavelmente um erro de digitação. Deveria ser `InteractiveElements.tsx` (como corrigido na importação do exemplo acima) para seguir as convenções de nomenclatura e evitar problemas de importação em alguns sistemas.

## Componentes de Seção (`src/features/landing/components/`)

Cada arquivo `.tsx` dentro desta pasta representa uma seção da landing page. Exemplos e seus prováveis propósitos:

*   **`HeroSection.tsx`**: A primeira seção visível, geralmente com o título principal, subtítulo e um call-to-action primário.
*   **`AboutProject.tsx`**: Descreve o que é o projeto GitSheet.
*   **`Mission.tsx`**: Apresenta a missão ou os objetivos principais do projeto.
*   **`FeaturesOverview.tsx`**: Destaca as principais funcionalidades oferecidas.
*   **`InteractiveElements.tsx`**: Mostra exemplos dos elementos interativos da plataforma (como os diagramas Mermaid ou os desafios práticos).
*   **`Benefits.tsx`**: Lista os benefícios de usar o GitSheet.
*   **`QuickStart.tsx`**: Um guia rápido de como começar a usar a plataforma.
*   **`TechStack.tsx`**: Mostra as tecnologias usadas no desenvolvimento do GitSheet (React, Vite, Tailwind, etc.). Isso pode incluir logos de tecnologias, como visto na `Footer`.
*   **`SocialProof.tsx`**: (Se implementado) Poderia incluir logos de empresas que usam Git, número de usuários (se aplicável), ou outras formas de prova social.
*   **`Testimonials.tsx`**: Depoimentos de usuários (se houver).
*   **`FAQ.tsx`**: Uma seção de Perguntas Frequentes sobre o GitSheet.
*   **`CallToAction.tsx`**: Uma seção final para incentivar o usuário a realizar uma ação (ex: explorar os comandos, iniciar um desafio).

## Fluxo de Dados

*   A Landing Page é primariamente estática, apresentando informações.
*   O fluxo de dados é principalmente unidirecional, com o `LandingPage.tsx` renderizando seus componentes de seção.
*   Interações (como cliques em botões de call-to-action) provavelmente usariam `<Link>` do React Router para navegar para outras seções da aplicação (ex: `/git-basics`, `/game`).

## Considerações

*   **Responsividade:** As seções devem ser projetadas para serem responsivas em diferentes tamanhos de tela.
*   **Performance:** Imagens e outros assets devem ser otimizados para garantir um carregamento rápido da página.
*   **SEO:** O conteúdo da Landing Page deve ser otimizado para motores de busca (uso de tags semânticas HTML, meta tags configuradas via `react-helmet-async` ou similar, se adicionado).
*   **Clareza e Concisão:** As informações devem ser apresentadas de forma clara e concisa para prender a atenção do usuário.

Esta feature serve como a porta de entrada para o GitSheet e é crucial para causar uma boa primeira impressão e guiar os usuários para as funcionalidades principais. 