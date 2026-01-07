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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upload Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload de PDF
              </CardTitle>
              <CardDescription>
                Arraste e solte ou clique para enviar o edital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 p-6 transition-colors hover:border-primary/50 hover:bg-muted"
                onClick={handleFileUpload}
              >
                {uploadedFile ? (
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{uploadedFile}</p>
                      <p className="text-sm text-muted-foreground">Upload concluído</p>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success">
                      <Check className="h-4 w-4 text-success-foreground" />
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
                    <p className="mb-1 font-medium">Clique para enviar</p>
                    <p className="text-sm text-muted-foreground">
                      PDF até 10MB
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Colar Link do Edital
              </CardTitle>
              <CardDescription>
                Cole o link direto do edital publicado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edital-link">URL do Edital</Label>
                <Input
                  id="edital-link"
                  placeholder="https://exemplo.com/edital.pdf"
                  value={linkValue}
                  onChange={(e) => setLinkValue(e.target.value)}
                />
              </div>
              <Button onClick={handleLinkSubmit} disabled={!linkValue}>
                Analisar Link
              </Button>
            </CardContent>
          </Card>

          {/* AI Notice */}
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Análise por Inteligência Artificial</p>
                <p className="text-sm text-muted-foreground">
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
