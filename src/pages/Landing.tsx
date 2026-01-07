import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Calendar, TrendingUp, FileText, Target, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EstudaConcursos AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/setup">
              <Button>Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            Potencializado por Inteligência Artificial
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Organize seus estudos para
            <span className="text-primary"> concursos públicos</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            A IA analisa seu edital e cria um cronograma personalizado. 
            Estude de forma inteligente e acompanhe seu progresso em tempo real.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/setup">
              <Button size="lg" className="w-full sm:w-auto">
                Começar Gratuitamente
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Como funciona</h2>
          <p className="text-muted-foreground">
            Três passos simples para transformar sua preparação
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="group transition-all hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">1. Envie o Edital</h3>
              <p className="text-muted-foreground">
                Faça upload do PDF ou cole o link. Nossa IA extrai todas as matérias e pesos automaticamente.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">2. Receba seu Cronograma</h3>
              <p className="text-muted-foreground">
                Um plano de estudos personalizado com base no seu tempo disponível e nas prioridades do edital.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">3. Acompanhe o Progresso</h3>
              <p className="text-muted-foreground">
                Visualize sua evolução, ajuste o cronograma e mantenha-se motivado até a aprovação.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Por que escolher o EstudaConcursos AI?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Foco no que importa</h4>
                    <p className="text-muted-foreground">
                      A IA identifica as matérias mais cobradas e otimiza seu tempo de estudo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cronograma adaptável</h4>
                    <p className="text-muted-foreground">
                      Perdeu um dia? O sistema reorganiza automaticamente suas tarefas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Inteligência contínua</h4>
                    <p className="text-muted-foreground">
                      Aprende com seu desempenho e sugere ajustes para maximizar resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <div className="h-3 w-3 rounded-full bg-success" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-1/2 rounded bg-muted" />
                  <div className="h-20 rounded bg-primary/10" />
                  <div className="flex gap-2">
                    <div className="h-8 w-20 rounded bg-primary/20" />
                    <div className="h-8 w-20 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">
            Pronto para começar sua jornada?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Junte-se a milhares de concurseiros que já estão estudando de forma mais inteligente.
          </p>
          <Link to="/setup">
            <Button size="lg">Criar meu cronograma grátis</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">EstudaConcursos AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EstudaConcursos AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
