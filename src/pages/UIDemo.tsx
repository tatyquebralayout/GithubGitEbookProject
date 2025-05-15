import React from 'react';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from '../components/ui';
import { GitCommit, GitBranch, GitMerge, AlertCircle, Check, X } from 'lucide-react';

const UIDemo: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-10 text-center text-3xl font-bold">Biblioteca de Componentes UI</h1>

      {/* Seção de Botões */}
      <section className="mb-16">
        <h2 className="mb-6 border-b border-github-border-default pb-2 text-2xl font-medium">
          Botões
        </h2>

        <div className="space-y-8">
          {/* Variantes */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Variantes</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
            </div>
          </div>

          {/* Tamanhos */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Tamanhos</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Estados */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Estados</h3>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Carregando</Button>
              <Button disabled>Desativado</Button>
              <Button fullWidth>Largura Total</Button>
            </div>
          </div>

          {/* Com ícones */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Com Ícones</h3>
            <div className="flex flex-wrap gap-4">
              <Button leftIcon={<GitCommit size={16} />}>Commit</Button>
              <Button rightIcon={<GitBranch size={16} />}>Branch</Button>
              <Button leftIcon={<GitMerge size={16} />} rightIcon={<Check size={16} />}>
                Merge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Badges */}
      <section className="mb-16">
        <h2 className="mb-6 border-b border-github-border-default pb-2 text-2xl font-medium">
          Badges
        </h2>

        <div className="space-y-8">
          {/* Variantes */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Variantes</h3>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="ghost">Ghost</Badge>
            </div>
          </div>

          {/* Tamanhos */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Tamanhos</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>

          {/* Formato */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Formato</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Padrão</Badge>
              <Badge rounded>Arredondado</Badge>
            </div>
          </div>

          {/* Com ícones */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Com Ícones</h3>
            <div className="flex flex-wrap gap-4">
              <Badge variant="success" icon={<Check size={12} />}>
                Success
              </Badge>
              <Badge variant="danger" icon={<X size={12} />}>
                Error
              </Badge>
              <Badge variant="warning" icon={<AlertCircle size={12} />}>
                Warning
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cards */}
      <section>
        <h2 className="mb-6 border-b border-github-border-default pb-2 text-2xl font-medium">
          Cards
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card Básico */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Card Simples</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Este é um exemplo de Card básico com cabeçalho e corpo.</p>
            </CardBody>
          </Card>

          {/* Card Completo */}
          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GitBranch size={16} className="text-github-fg-muted" />
                <CardTitle>Card Completo</CardTitle>
              </div>
              <CardDescription>Card com todos os componentes</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="mb-4">
                Este é um exemplo de Card completo com cabeçalho, descrição, corpo e rodapé.
              </p>
              <div className="flex gap-2">
                <Badge variant="success" size="sm">
                  Aprovado
                </Badge>
                <Badge variant="primary" size="sm">
                  Destacado
                </Badge>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex w-full justify-between">
                <Button variant="ghost" size="sm">
                  Cancelar
                </Button>
                <Button variant="primary" size="sm">
                  Confirmar
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UIDemo;
