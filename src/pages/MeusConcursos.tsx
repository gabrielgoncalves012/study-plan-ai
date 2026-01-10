import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, BookOpen, Plus, MoreVertical, Eye } from "lucide-react";

interface Concurso {
  id: string;
  nome: string;
  orgao: string;
  status: "em_andamento" | "concluido" | "pausado";
  progresso: number;
  dataInicio: string;
  materias: number;
}

const concursos: Concurso[] = [
  {
    id: "1",
    nome: "Banco do Brasil 2025",
    orgao: "BB",
    status: "em_andamento",
    progresso: 65,
    dataInicio: "15/10/2024",
    materias: 8,
  },
  {
    id: "2",
    nome: "Banco Santander 2024",
    orgao: "Santander",
    status: "concluido",
    progresso: 100,
    dataInicio: "01/03/2024",
    materias: 6,
  },
  {
    id: "3",
    nome: "INSS 2025",
    orgao: "INSS",
    status: "em_andamento",
    progresso: 32,
    dataInicio: "05/12/2024",
    materias: 10,
  },
  {
    id: "4",
    nome: "Caixa Econômica 2024",
    orgao: "CEF",
    status: "pausado",
    progresso: 45,
    dataInicio: "20/06/2024",
    materias: 7,
  },
  {
    id: "5",
    nome: "Receita Federal 2025",
    orgao: "RFB",
    status: "em_andamento",
    progresso: 15,
    dataInicio: "02/01/2025",
    materias: 12,
  },
];

const getStatusBadge = (status: Concurso["status"]) => {
  switch (status) {
    case "em_andamento":
      return <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Em andamento</Badge>;
    case "concluido":
      return <Badge className="bg-success/10 text-success hover:bg-success/20">Concluído</Badge>;
    case "pausado":
      return <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Pausado</Badge>;
  }
};

const MeusConcursos = () => {
  const concursosAtivos = concursos.filter((c) => c.status === "em_andamento").length;
  const concursosConcluidos = concursos.filter((c) => c.status === "concluido").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Meus Concursos</h1>
          <p className="text-muted-foreground">
            Gerencie seus concursos e acompanhe seu progresso
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Concurso
        </Button>
      </div>

      {/* Stats resumo */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold">{concursos.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Em andamento</p>
            <p className="text-2xl font-bold text-primary">{concursosAtivos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Concluídos</p>
            <p className="text-2xl font-bold text-success">{concursosConcluidos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Pausados</p>
            <p className="text-2xl font-bold text-warning">
              {concursos.filter((c) => c.status === "pausado").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grid de Concursos */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concursos.map((concurso) => (
          <Card key={concurso.id} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{concurso.nome}</CardTitle>
                    <p className="text-sm text-muted-foreground">{concurso.orgao}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                {getStatusBadge(concurso.status)}
                <span className="text-sm font-medium">{concurso.progresso}%</span>
              </div>

              <Progress value={concurso.progresso} className="h-2" />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{concurso.dataInicio}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{concurso.materias} matérias</span>
                </div>
              </div>

              <Button variant="outline" className="w-full gap-2">
                <Eye className="h-4 w-4" />
                Ver detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MeusConcursos;
