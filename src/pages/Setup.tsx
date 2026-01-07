import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUp, Link as LinkIcon, BookOpen, Brain, ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type SetupOption = "upload" | "link" | "area" | null;

const areaOptions = [
  { id: "policial", label: "Policial", description: "PRF, PF, PM, PC" },
  { id: "bancaria", label: "Bancária", description: "BB, Caixa, Bacen" },
  { id: "administrativa", label: "Administrativa", description: "INSS, Receita, Tribunais" },
  { id: "fiscal", label: "Fiscal", description: "Auditor, Analista Tributário" },
  { id: "juridica", label: "Jurídica", description: "Magistratura, MP, Defensoria" },
  { id: "educacao", label: "Educação", description: "Professor, Pedagogo" },
];

const Setup = () => {
  const [selectedOption, setSelectedOption] = useState<SetupOption>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedOption === "area" && selectedArea) {
      navigate("/dashboard");
    } else if (selectedOption) {
      navigate("/edital");
    }
  };

  const canContinue =
    selectedOption === "upload" ||
    selectedOption === "link" ||
    (selectedOption === "area" && selectedArea);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EstudaConcursos AI</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <div className="mb-8 text-center animate-fade-in">
            <h1 className="mb-2 text-3xl font-bold">Vamos montar seu plano de estudos</h1>
            <p className="text-muted-foreground">
              Escolha como você quer começar. A IA vai analisar e criar seu cronograma personalizado.
            </p>
          </div>

          {/* Options */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <Card
              className={cn(
                "cursor-pointer transition-all hover:shadow-lg",
                selectedOption === "upload" && "ring-2 ring-primary"
              )}
              onClick={() => setSelectedOption("upload")}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <FileUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">Upload de Edital</h3>
                <p className="text-sm text-muted-foreground">
                  Envie o PDF do edital do seu concurso
                </p>
                {selectedOption === "upload" && (
                  <div className="mt-3 flex justify-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all hover:shadow-lg",
                selectedOption === "link" && "ring-2 ring-primary"
              )}
              onClick={() => setSelectedOption("link")}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <LinkIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">Colar Link</h3>
                <p className="text-sm text-muted-foreground">
                  Cole o link do edital publicado
                </p>
                {selectedOption === "link" && (
                  <div className="mt-3 flex justify-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all hover:shadow-lg",
                selectedOption === "area" && "ring-2 ring-primary"
              )}
              onClick={() => setSelectedOption("area")}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">Escolher Área</h3>
                <p className="text-sm text-muted-foreground">
                  Selecione uma área de concursos
                </p>
                {selectedOption === "area" && (
                  <div className="mt-3 flex justify-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Area Selection */}
          {selectedOption === "area" && (
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle>Selecione a área do concurso</CardTitle>
                <CardDescription>
                  Vamos criar um cronograma base com as matérias mais comuns dessa área.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {areaOptions.map((area) => (
                    <div
                      key={area.id}
                      className={cn(
                        "cursor-pointer rounded-lg border p-4 transition-colors hover:bg-accent",
                        selectedArea === area.id && "border-primary bg-primary/5"
                      )}
                      onClick={() => setSelectedArea(area.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{area.label}</p>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                        {selectedArea === area.id && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                            <Check className="h-3 w-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              disabled={!canContinue}
              onClick={handleContinue}
              className="min-w-[200px]"
            >
              Continuar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Setup;
