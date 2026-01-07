import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Clock, Target } from "lucide-react";

const subjectProgress = [
  { subject: "Português", progress: 78, status: "good", hoursStudied: 24, totalHours: 30 },
  { subject: "Matemática", progress: 65, status: "good", hoursStudied: 18, totalHours: 28 },
  { subject: "Direito Constitucional", progress: 45, status: "warning", hoursStudied: 12, totalHours: 26 },
  { subject: "Direito Administrativo", progress: 32, status: "warning", hoursStudied: 8, totalHours: 25 },
  { subject: "Informática", progress: 88, status: "excellent", hoursStudied: 14, totalHours: 16 },
  { subject: "Raciocínio Lógico", progress: 52, status: "warning", hoursStudied: 10, totalHours: 20 },
  { subject: "Atualidades", progress: 70, status: "good", hoursStudied: 7, totalHours: 10 },
  { subject: "Ética no Serviço Público", progress: 95, status: "excellent", hoursStudied: 8, totalHours: 8 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "text-success";
    case "good":
      return "text-primary";
    case "warning":
      return "text-warning";
    case "critical":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "excellent":
      return <Badge className="bg-success text-success-foreground">Excelente</Badge>;
    case "good":
      return <Badge className="bg-primary text-primary-foreground">Bom</Badge>;
    case "warning":
      return <Badge variant="outline" className="border-warning text-warning">Atenção</Badge>;
    case "critical":
      return <Badge variant="destructive">Crítico</Badge>;
    default:
      return null;
  }
};

const Progresso = () => {
  const overallProgress = Math.round(
    subjectProgress.reduce((acc, s) => acc + s.progress, 0) / subjectProgress.length
  );
  const totalHoursStudied = subjectProgress.reduce((acc, s) => acc + s.hoursStudied, 0);
  const excellentSubjects = subjectProgress.filter((s) => s.status === "excellent").length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Seu Progresso</h1>
        <p className="text-muted-foreground">
          Acompanhe sua evolução em cada matéria
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Progresso Geral</p>
              <p className="text-2xl font-bold">{overallProgress}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
              <Clock className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Horas Estudadas</p>
              <p className="text-2xl font-bold">{totalHoursStudied}h</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
              <TrendingUp className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Matérias</p>
              <p className="text-2xl font-bold">{subjectProgress.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Excelentes</p>
              <p className="text-2xl font-bold">{excellentSubjects}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Progresso por Matéria</CardTitle>
            <CardDescription>
              Clique em uma matéria para ver detalhes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectProgress.map((item) => (
              <div
                key={item.subject}
                className="rounded-lg border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{item.subject}</span>
                    {getStatusBadge(item.status)}
                  </div>
                  <span className={`font-bold ${getStatusColor(item.status)}`}>
                    {item.progress}%
                  </span>
                </div>
                <Progress
                  value={item.progress}
                  className={`h-2 ${
                    item.status === "excellent"
                      ? "[&>div]:bg-success"
                      : item.status === "warning"
                      ? "[&>div]:bg-warning"
                      : ""
                  }`}
                />
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {item.hoursStudied}h de {item.totalHours}h planejadas
                  </span>
                  <span>
                    Faltam {item.totalHours - item.hoursStudied}h
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Motivational Card */}
          <Card className="border-success/50 bg-success/5">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Você está evoluindo!</h3>
              <p className="text-muted-foreground">
                Continue assim! Sua dedicação está fazendo a diferença. 🚀
              </p>
            </CardContent>
          </Card>

          {/* Priority Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚠️ Prioridades</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Matérias que precisam de mais atenção:
              </p>
              <div className="space-y-2">
                {subjectProgress
                  .filter((s) => s.status === "warning" || s.status === "critical")
                  .slice(0, 3)
                  .map((item) => (
                    <div
                      key={item.subject}
                      className="flex items-center justify-between rounded-lg bg-warning/10 p-3"
                    >
                      <span className="font-medium">{item.subject}</span>
                      <span className="text-sm text-warning">{item.progress}%</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🏆 Conquistas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  🔥
                </div>
                <div>
                  <p className="font-medium">7 dias seguidos</p>
                  <p className="text-sm text-muted-foreground">Sequência de estudos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  ⭐
                </div>
                <div>
                  <p className="font-medium">Informática dominada</p>
                  <p className="text-sm text-muted-foreground">88% concluído</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Progresso;
