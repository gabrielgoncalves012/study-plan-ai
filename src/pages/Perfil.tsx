import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, Clock, Bell, Moon, Shield, Target } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Perfil = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Meu Perfil</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Gerencie suas informações e preferências
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-2">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Informações Pessoais</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Seus dados básicos de cadastro
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Maria Silva</h3>
                <p className="text-sm text-muted-foreground">maria.silva@email.com</p>
                <Badge className="mt-2" variant="secondary">
                  Plano Gratuito
                </Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" defaultValue="Maria Silva" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    defaultValue="maria.silva@email.com"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <Button size="sm" className="sm:size-default">Salvar Alterações</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">📊 Estatísticas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">Dias estudando</span>
              </div>
              <span className="font-bold text-sm sm:text-base">32</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">Horas totais</span>
              </div>
              <span className="font-bold text-sm sm:text-base">101h</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">Tarefas</span>
              </div>
              <span className="font-bold text-sm sm:text-base">248</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Study Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferências de Estudo</CardTitle>
          <CardDescription>
            Configure como você prefere estudar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Área do Concurso</Label>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-medium">Administrativa</p>
                <p className="text-sm text-muted-foreground">
                  INSS, Receita, Tribunais
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tempo Diário Disponível</Label>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-medium">4 horas</p>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Concurso Alvo</Label>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="font-medium">Técnico Administrativo</p>
                <p className="text-sm text-muted-foreground">
                  Órgão Federal 2024
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="outline">Editar Preferências</Button>
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações</CardTitle>
          <CardDescription>
            Personalize sua experiência na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Moon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Modo Escuro</p>
                <p className="text-sm text-muted-foreground">
                  Ativar tema escuro
                </p>
              </div>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Notificações</p>
                <p className="text-sm text-muted-foreground">
                  Receber lembretes de estudo
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Perfil Público</p>
                <p className="text-sm text-muted-foreground">
                  Mostrar seu progresso para outros
                </p>
              </div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Perfil;
