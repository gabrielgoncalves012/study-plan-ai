import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Sparkles, Check } from "lucide-react";

interface DayTask {
  id: string;
  subject: string;
  topic: string;
  duration: string;
  completed: boolean;
}

interface WeekDay {
  date: string;
  dayName: string;
  dayNumber: number;
  isToday: boolean;
  tasks: DayTask[];
}

const generateWeekData = (): WeekDay[] => {
  const subjects = [
    { subject: "Português", topics: ["Concordância", "Regência", "Pontuação", "Interpretação"] },
    { subject: "Matemática", topics: ["Razão", "Proporção", "Porcentagem", "Juros"] },
    { subject: "Direito Constitucional", topics: ["Direitos Fundamentais", "Organização do Estado"] },
    { subject: "Informática", topics: ["Redes", "Segurança", "Planilhas", "Editores"] },
    { subject: "Raciocínio Lógico", topics: ["Proposições", "Sequências", "Conjuntos"] },
  ];

  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const today = new Date();

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);

    const tasksCount = i === 0 ? 0 : Math.floor(Math.random() * 3) + 2;
    const tasks: DayTask[] = Array.from({ length: tasksCount }, (_, j) => {
      const subjectData = subjects[Math.floor(Math.random() * subjects.length)];
      return {
        id: `${i}-${j}`,
        subject: subjectData.subject,
        topic: subjectData.topics[Math.floor(Math.random() * subjectData.topics.length)],
        duration: `${Math.floor(Math.random() * 30) + 30} min`,
        completed: date < today || (date.getDate() === today.getDate() && Math.random() > 0.5),
      };
    });

    return {
      date: date.toISOString(),
      dayName: days[i],
      dayNumber: date.getDate(),
      isToday: date.getDate() === today.getDate() && date.getMonth() === today.getMonth(),
      tasks,
    };
  });
};

const Cronograma = () => {
  const [weekData, setWeekData] = useState<WeekDay[]>(generateWeekData);
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay());

  const toggleTask = (dayIndex: number, taskId: string) => {
    setWeekData((prev) =>
      prev.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              tasks: day.tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              ),
            }
          : day
      )
    );
  };

  const selectedDayData = weekData[selectedDay];
  const completedTasks = selectedDayData?.tasks.filter((t) => t.completed).length || 0;
  const totalTasks = selectedDayData?.tasks.length || 0;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cronograma</h1>
          <p className="text-muted-foreground">
            Seu plano de estudos semanal organizado pela IA
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          Ajustado automaticamente
        </Badge>
      </div>

      {/* Week Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">Esta Semana</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekData.map((day, index) => {
              const dayProgress =
                day.tasks.length > 0
                  ? Math.round(
                      (day.tasks.filter((t) => t.completed).length / day.tasks.length) * 100
                    )
                  : 0;

              return (
                <button
                  key={day.date}
                  onClick={() => setSelectedDay(index)}
                  className={`flex flex-col items-center rounded-lg p-3 transition-colors ${
                    selectedDay === index
                      ? "bg-primary text-primary-foreground"
                      : day.isToday
                      ? "bg-primary/10"
                      : "hover:bg-accent"
                  }`}
                >
                  <span className="text-xs font-medium uppercase opacity-70">
                    {day.dayName}
                  </span>
                  <span className="text-lg font-bold">{day.dayNumber}</span>
                  {day.tasks.length > 0 && (
                    <div className="mt-1 flex items-center gap-1">
                      {dayProgress === 100 ? (
                        <Check className="h-3 w-3 text-success" />
                      ) : (
                        <span className="text-xs">{dayProgress}%</span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Day Details */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>
                {selectedDayData?.isToday ? "Hoje" : selectedDayData?.dayName},{" "}
                {selectedDayData?.dayNumber}
              </span>
              {totalTasks > 0 && (
                <Badge variant={completedTasks === totalTasks ? "default" : "secondary"}>
                  {completedTasks}/{totalTasks} concluídas
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDayData?.tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-lg font-medium">Dia de descanso! 😴</p>
                <p className="text-muted-foreground">
                  Aproveite para revisar ou relaxar.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedDayData?.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 rounded-lg border p-4 transition-colors ${
                      task.completed ? "bg-muted/50" : "hover:bg-accent/50"
                    }`}
                  >
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(selectedDay, task.id)}
                      className="h-5 w-5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-medium ${
                            task.completed ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {task.subject}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {task.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{task.topic}</p>
                    </div>
                    {task.completed && (
                      <Badge className="bg-success text-success-foreground">
                        <Check className="mr-1 h-3 w-3" />
                        Feito
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📊 Resumo da Semana</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total de tarefas</span>
                <span className="font-medium">
                  {weekData.reduce((acc, day) => acc + day.tasks.length, 0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Concluídas</span>
                <span className="font-medium text-success">
                  {weekData.reduce(
                    (acc, day) => acc + day.tasks.filter((t) => t.completed).length,
                    0
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Pendentes</span>
                <span className="font-medium text-warning">
                  {weekData.reduce(
                    (acc, day) => acc + day.tasks.filter((t) => !t.completed).length,
                    0
                  )}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Cronograma Inteligente</p>
                  <p className="text-sm text-muted-foreground">
                    Se você não completar uma tarefa, a IA redistribui automaticamente nos
                    próximos dias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cronograma;
