import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";


interface Task {
  id: string;
  subject: string;
  topic: string;
  duration: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: "1", subject: "Português", topic: "Concordância Verbal", duration: "45 min", completed: true },
  { id: "2", subject: "Matemática", topic: "Razão e Proporção", duration: "60 min", completed: true },
  { id: "3", subject: "Direito Constitucional", topic: "Direitos Fundamentais", duration: "50 min", completed: false },
  { id: "4", subject: "Informática", topic: "Redes de Computadores", duration: "40 min", completed: false },
  { id: "5", subject: "Raciocínio Lógico", topic: "Proposições", duration: "45 min", completed: false },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Olá, Maria! 👋</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Veja seu cronograma de estudos para hoje.
        </p>
      </div>


      {/* Main Content */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              📚 Seu Cronograma de Hoje
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Complete suas tarefas para manter o ritmo de estudos
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-muted-foreground">Progresso do dia</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-2 sm:space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 sm:gap-4 rounded-lg border p-3 sm:p-4 transition-colors ${
                    task.completed ? "bg-muted/50" : "hover:bg-accent/50"
                  }`}
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-medium text-sm sm:text-base ${
                          task.completed ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {task.subject}
                      </span>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs">
                        {task.duration}
                      </Badge>
                    </div>
                    <p
                      className={`text-xs sm:text-sm ${
                        task.completed ? "text-muted-foreground" : "text-muted-foreground"
                      } truncate`}
                    >
                      {task.topic}
                    </p>
                  </div>
                  {task.completed && (
                    <Badge className="bg-success text-success-foreground text-[10px] sm:text-xs hidden sm:flex">
                      Concluído
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎯 Meta da Semana</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">20h de estudo</span>
                <span className="font-medium">14h / 20h</span>
              </div>
              <Progress value={70} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                Faltam 6 horas para bater sua meta!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">💡 Dica do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Estudar em blocos de 45 minutos com pausas de 10 minutos aumenta
                a retenção em até 25%. Experimente a técnica Pomodoro!
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-4">
              <p className="text-center text-sm font-medium">
                🚀 Você está evoluindo!
                <br />
                <span className="text-muted-foreground">Continue assim!</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
