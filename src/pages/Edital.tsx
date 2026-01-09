import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, Link as LinkIcon, FileText, Brain, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockEditalContent = [
  { subject: "Língua Portuguesa", weight: 20, topics: 15 },
  { subject: "Matemática", weight: 15, topics: 12 },
  { subject: "Direito Constitucional", weight: 15, topics: 10 },
  { subject: "Direito Administrativo", weight: 15, topics: 14 },
  { subject: "Informática", weight: 10, topics: 8 },
  { subject: "Raciocínio Lógico", weight: 10, topics: 6 },
  { subject: "Atualidades", weight: 10, topics: 5 },
  { subject: "Ética no Serviço Público", weight: 5, topics: 4 },
];

const Edital = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [linkValue, setLinkValue] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = () => {
    // Simulated file upload
    setUploadedFile("edital_concurso_2024.pdf");
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowPreview(true);
    }, 2000);
  };

  const handleLinkSubmit = () => {
    if (linkValue) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowPreview(true);
      }, 2000);
    }
  };

  const handleGenerateSchedule = () => {
    navigate("/cronograma");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Análise do Edital</h1>
        <p className="text-muted-foreground">
          Envie seu edital e a IA irá extrair automaticamente as matérias e conteúdos.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Upload Section */}
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                Upload de PDF
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Arraste e solte ou clique para enviar o edital
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
              <div
                className="flex min-h-[150px] sm:min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-4 sm:p-6 transition-colors hover:border-primary/50 hover:bg-muted"
                onClick={handleFileUpload}
              >
                {uploadedFile ? (
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-medium text-sm sm:text-base">{uploadedFile}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Upload concluído</p>
                    </div>
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-success">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-success-foreground" />
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                    <p className="mb-1 font-medium text-sm sm:text-base">Clique para enviar</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      PDF até 10MB
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Colar Link do Edital
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Cole o link direto do edital publicado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
              <div className="space-y-2">
                <Label htmlFor="edital-link" className="text-sm">URL do Edital</Label>
                <Input
                  id="edital-link"
                  placeholder="https://exemplo.com/edital.pdf"
                  value={linkValue}
                  onChange={(e) => setLinkValue(e.target.value)}
                  className="text-sm"
                />
              </div>
              <Button onClick={handleLinkSubmit} disabled={!linkValue} size="sm" className="sm:size-default">
                Analisar Link
              </Button>
            </CardContent>
          </Card>

          {/* AI Notice */}
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">Análise por Inteligência Artificial</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  A IA irá identificar matérias, pesos e criar um cronograma otimizado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Resumo do Edital
            </CardTitle>
            <CardDescription>
              {showPreview
                ? "Matérias identificadas pelo sistema"
                : "O resumo aparecerá aqui após a análise"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="font-medium">Analisando edital...</p>
                <p className="text-sm text-muted-foreground">
                  Isso pode levar alguns segundos
                </p>
              </div>
            ) : showPreview ? (
              <div className="space-y-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    Concurso identificado
                  </p>
                  <p className="font-semibold">
                    Técnico Administrativo - Órgão Federal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Data da prova: 15/06/2024
                  </p>
                </div>

                <div>
                  <p className="mb-3 font-medium">Matérias ({mockEditalContent.length})</p>
                  <div className="space-y-2">
                    {mockEditalContent.map((item) => (
                      <div
                        key={item.subject}
                        className="flex items-center justify-between rounded-lg border p-3"
                      >
                        <div>
                          <p className="font-medium">{item.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.topics} tópicos
                          </p>
                        </div>
                        <Badge variant="secondary">{item.weight}%</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" onClick={handleGenerateSchedule}>
                  Gerar Cronograma
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="mb-4 h-12 w-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">
                  Envie um edital para ver a análise aqui
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Edital;
