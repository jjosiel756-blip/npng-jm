import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import bodyFrontWorkout from "@/assets/body-front-workout-transparent.png";
import bodyBackWorkout from "@/assets/body-back-workout-transparent.png";

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
  const labels = view === "front" ? frontLabels : backLabels;
  const [isEditing, setIsEditing] = useState(false);
  const [labelSize, setLabelSize] = useState(14);
  const [lineWidth, setLineWidth] = useState(40);

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8 gap-4">
      {/* Edit Controls */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Editar Labels
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

      <div className="relative w-full max-w-[600px] flex items-center justify-center">
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
                label.side === "left" ? "left-0" : "right-0"
              } cursor-pointer group`}
              style={{ top: label.top }}
              onClick={() => onMuscleSelect(label.muscle)}
            >
              <div className={`flex items-center ${label.side === "left" ? "flex-row" : "flex-row-reverse"} gap-1`}>
                <div
                  className={`font-medium px-2 py-1 whitespace-nowrap ${
                    label.side === "left" ? "text-left" : "text-right"
                  } ${
                    selectedMuscle === label.muscle
                      ? "font-bold text-primary"
                      : "text-foreground group-hover:font-semibold group-hover:text-primary"
                  } transition-all duration-200`}
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
    </div>
  );
}
