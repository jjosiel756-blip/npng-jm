import { useState, useEffect } from "react";
import { Settings, Save, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import bodyFrontWorkout from "@/assets/body-front-workout-transparent.png";
import bodyBackWorkout from "@/assets/body-back-workout-transparent.png";
import { ExerciseList } from "@/components/ExerciseList";

interface WorkoutMuscleMapProps {
  view: "front" | "back";
  selectedMuscle: string | null;
  onMuscleSelect: (muscle: string) => void;
}

interface MuscleLabel {
  name: string;
  muscle: string;
  side: "left" | "right";
  top: string;
  left?: string;
  right?: string;
}

const frontLabels: MuscleLabel[] = [
  { name: "Peitoral", muscle: "chest", side: "right", top: "20%" },
  { name: "Ombros", muscle: "shoulders", side: "left", top: "16%" },
  { name: "Bíceps", muscle: "biceps", side: "left", top: "30%" },
  { name: "Abdômen", muscle: "abs", side: "right", top: "36%" },
  { name: "Antebraços", muscle: "forearms", side: "right", top: "48%" },
  { name: "Oblíquos", muscle: "obliques", side: "left", top: "44%" },
  { name: "Quadríceps", muscle: "legs", side: "left", top: "62%" },
  { name: "Adutores", muscle: "adductors", side: "right", top: "62%" },
  { name: "Panturrilhas", muscle: "calves", side: "right", top: "78%" },
];

const backLabels: MuscleLabel[] = [
  { name: "Trapézio", muscle: "traps", side: "right", top: "14%" },
  { name: "Dorsais", muscle: "back", side: "right", top: "28%" },
  { name: "Tríceps", muscle: "triceps", side: "left", top: "28%" },
  { name: "Lombares", muscle: "lower_back", side: "left", top: "42%" },
  { name: "Glúteos", muscle: "glutes", side: "right", top: "48%" },
  { name: "Isquiotibiais", muscle: "hamstrings", side: "left", top: "62%" },
  { name: "Panturrilhas", muscle: "calves", side: "right", top: "76%" },
];

export function WorkoutMuscleMap({ view, selectedMuscle, onMuscleSelect }: WorkoutMuscleMapProps) {
  const storageKey = `muscle-labels-${view}`;
  const [labels, setLabels] = useState<MuscleLabel[]>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : (view === "front" ? frontLabels : backLabels);
  });
  const [isEditing, setIsEditing] = useState(false);
  const [labelSize, setLabelSize] = useState(14);
  const [lineWidth, setLineWidth] = useState(40);
  const [draggedLabel, setDraggedLabel] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showExercises, setShowExercises] = useState(false);
  const [selectedMuscleForExercises, setSelectedMuscleForExercises] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setLabels(saved ? JSON.parse(saved) : (view === "front" ? frontLabels : backLabels));
  }, [view]);

  const handleSavePositions = () => {
    localStorage.setItem(storageKey, JSON.stringify(labels));
    toast.success("Posições salvas com sucesso!");
  };

  const handleResetPositions = () => {
    const defaultLabels = view === "front" ? frontLabels : backLabels;
    setLabels(defaultLabels);
    localStorage.removeItem(storageKey);
    toast.success("Posições resetadas!");
  };

  const handleFlipSide = (muscle: string) => {
    setLabels(prev => prev.map(label => 
      label.muscle === muscle 
        ? { ...label, side: label.side === "left" ? "right" : "left" }
        : label
    ));
  };

  const handleDragStart = (e: React.MouseEvent, muscle: string) => {
    if (!isEditing) return;
    e.preventDefault();
    setDraggedLabel(muscle);
    
    const label = labels.find(l => l.muscle === muscle);
    if (!label) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isEditing || !draggedLabel) return;
    
    const container = document.getElementById('muscle-map-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const topPercent = ((e.clientY - containerRect.top - dragOffset.y) / containerRect.height) * 100;
    const leftPercent = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    setLabels(prev => prev.map(label => 
      label.muscle === draggedLabel
        ? { 
            ...label, 
            top: `${Math.max(0, Math.min(100, topPercent))}%`,
            ...(label.side === "left" 
              ? { left: `${Math.max(0, Math.min(50, leftPercent))}%` }
              : { right: `${Math.max(0, Math.min(50, 100 - leftPercent))}%` }
            )
          }
        : label
    ));
  };

  const handleDragEnd = () => {
    setDraggedLabel(null);
  };

  const handleLabelClick = (muscle: string) => {
    if (isEditing) return;
    onMuscleSelect(muscle);
    setSelectedMuscleForExercises(muscle);
    setShowExercises(true);
  };

  const getMuscleName = (muscle: string) => {
    const label = labels.find(l => l.muscle === muscle);
    return label ? label.name : muscle;
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8 gap-4">
      {/* Edit Controls */}
      <div className="flex gap-2 flex-wrap justify-center">
        <Button 
          variant={isEditing ? "default" : "outline"} 
          size="sm" 
          className="gap-2"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit2 className="w-4 h-4" />
          {isEditing ? "Modo Edição Ativo" : "Ativar Edição"}
        </Button>

        {isEditing && (
          <>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleSavePositions}>
              <Save className="w-4 h-4" />
              Salvar Posições
            </Button>
            <Button variant="outline" size="sm" onClick={handleResetPositions}>
              Resetar
            </Button>
          </>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="w-4 h-4" />
              Ajustes
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="label-size">Tamanho do Texto: {labelSize}px</Label>
                <Slider
                  id="label-size"
                  min={10}
                  max={20}
                  step={1}
                  value={[labelSize]}
                  onValueChange={(value) => setLabelSize(value[0])}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="line-width">Largura da Linha: {lineWidth}px</Label>
                <Slider
                  id="line-width"
                  min={20}
                  max={80}
                  step={5}
                  value={[lineWidth]}
                  onValueChange={(value) => setLineWidth(value[0])}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {isEditing && (
        <div className="text-sm text-muted-foreground text-center">
          Arraste os labels para reposicionar • Clique duas vezes para inverter o lado
        </div>
      )}

      <div 
        id="muscle-map-container"
        className="relative w-full max-w-[600px] flex items-center justify-center"
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Body Image - transparent background adapts to theme */}
        <div className="relative flex items-center justify-center transition-all duration-300 ease-in-out">
          <img
            src={view === "front" ? bodyFrontWorkout : bodyBackWorkout}
            alt={view === "front" ? "Vista frontal do corpo" : "Vista traseira do corpo"}
            className="w-[280px] h-auto object-contain transition-opacity duration-300"
            style={{ maxHeight: "600px" }}
          />
        </div>

        {/* Muscle Labels */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {labels.map((label) => (
            <div
              key={label.muscle}
              className={`absolute pointer-events-auto ${
                !label.left && !label.right ? (label.side === "left" ? "left-0" : "right-0") : ""
              } ${isEditing ? "cursor-move" : "cursor-pointer"} group ${
                draggedLabel === label.muscle ? "z-50 opacity-80" : ""
              }`}
              style={{ 
                top: label.top,
                left: label.side === "left" && label.left ? label.left : undefined,
                right: label.side === "right" && label.right ? label.right : undefined
              }}
              onClick={() => handleLabelClick(label.muscle)}
              onDoubleClick={() => isEditing && handleFlipSide(label.muscle)}
              onMouseDown={(e) => handleDragStart(e, label.muscle)}
            >
              <div className={`flex items-center ${label.side === "left" ? "flex-row" : "flex-row-reverse"} gap-1`}>
                <div
                  className={`font-medium px-2 py-1 whitespace-nowrap ${
                    label.side === "left" ? "text-left" : "text-right"
                  } ${
                    selectedMuscle === label.muscle
                      ? "font-bold text-primary"
                      : "text-foreground group-hover:font-semibold group-hover:text-primary"
                  } ${isEditing ? "bg-accent/20 rounded" : ""} transition-all duration-200`}
                  style={{ fontSize: `${labelSize}px` }}
                >
                  {label.name}
                </div>

                <div className="relative flex items-center">
                  <div
                    className={`h-[1px] ${
                      selectedMuscle === label.muscle ? "bg-primary" : "bg-muted-foreground group-hover:bg-primary"
                    } transition-colors duration-200`}
                    style={{ width: `${lineWidth}px` }}
                  />
                  <div
                    className={`w-2 h-2 rounded-full ${
                      selectedMuscle === label.muscle ? "bg-primary" : "bg-muted-foreground group-hover:bg-primary"
                    } transition-colors duration-200`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise Modal */}
      <Dialog open={showExercises} onOpenChange={setShowExercises}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>
              Exercícios para {selectedMuscleForExercises && getMuscleName(selectedMuscleForExercises)}
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto flex-1 pr-2">
            {selectedMuscleForExercises && (
              <ExerciseList muscle={selectedMuscleForExercises as any} searchQuery="" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
