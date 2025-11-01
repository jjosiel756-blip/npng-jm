import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, SkipForward, Trophy, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkoutTimer from '@/components/WorkoutTimer';
import WorkoutProgress from '@/components/WorkoutProgress';
import ExercisePlayer from '@/components/ExercisePlayer';
import { getWorkoutDay, WorkoutDay } from '@/data/workoutPrograms';
import { toast } from 'sonner';

const WorkoutSession: React.FC = () => {
  const { programId, dayId } = useParams<{ programId: string; dayId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [workout, setWorkout] = useState<WorkoutDay | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [completedExercises, setCompletedExercises] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    // Try to get workout from location state first (from direct navigation)
    if (location.state?.workout) {
      setWorkout(location.state.workout);
    } else if (programId && dayId) {
      // Otherwise try to load from workout programs
      const loadedWorkout = getWorkoutDay(programId, dayId);
      if (loadedWorkout) {
        setWorkout(loadedWorkout);
      } else {
        toast.error('Treino não encontrado');
        navigate('/workouts');
      }
    } else {
      toast.error('Informações do treino ausentes');
      navigate('/workouts');
    }
  }, [programId, dayId, location.state, navigate]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setTotalTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <div className="text-lg font-semibold">Carregando treino...</div>
        </div>
      </div>
    );
  }

  const currentExercise = workout.exercises[currentExerciseIndex];
  const timerDuration = isResting ? currentExercise.restTime : 0;

  const handleTimerComplete = () => {
    if (isResting) {
      setIsResting(false);
      playSound();
    }
  };

  const handleNextSet = () => {
    const nextSet = currentSet + 1;
    
    if (nextSet >= currentExercise.sets) {
      // Exercise completed, move to next exercise
      handleNextExercise();
    } else {
      // Start rest period
      setCurrentSet(nextSet);
      setIsResting(true);
      playSound();
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setCurrentSet(0);
      setIsResting(false);
      setCompletedExercises(prev => prev + 1);
      playSound();
      toast.success('Exercício concluído! Próximo exercício.');
    } else {
      // Workout completed
      finishWorkout();
    }
  };

  const finishWorkout = () => {
    const minutes = Math.floor(totalTime / 60);
    const caloriesBurned = Math.round((workout.exercises.length * 50) + (totalTime / 60) * 8);
    
    toast.success('🎉 Treino concluído com sucesso!', {
      description: `Tempo total: ${minutes} min | Calorias: ~${caloriesBurned} kcal`
    });
    
    navigate('/progress', { 
      state: { 
        workoutCompleted: true,
        workoutName: workout.name,
        duration: totalTime,
        calories: caloriesBurned
      } 
    });
  };

  const playSound = () => {
    if (soundEnabled) {
      const audio = new Audio('/sounds/beep.mp3');
      audio.play().catch(() => {});
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    toast.info(isPaused ? 'Treino retomado' : 'Treino pausado');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10 backdrop-blur-sm bg-card/95">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (confirm('Tem certeza que deseja sair do treino?')) {
                  navigate(-1);
                }
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Sair
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-muted-foreground">
                {formatTime(totalTime)}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSoundEnabled(!soundEnabled)}
              >
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
          
          <WorkoutProgress
            totalExercises={workout.exercises.length}
            completedExercises={completedExercises}
            currentExercise={currentExerciseIndex}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <ExercisePlayer
          exercise={currentExercise}
          currentSet={currentSet}
          isResting={isResting}
        />

        {/* Timer Section */}
        {isResting && (
          <div className="flex justify-center">
            <WorkoutTimer
              initialTime={timerDuration}
              isResting={isResting}
              onComplete={handleTimerComplete}
              isPaused={isPaused}
              onTogglePause={togglePause}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!isResting && (
            <Button
              onClick={handleNextSet}
              className="flex-1 h-14 text-lg"
              size="lg"
            >
              {currentSet < currentExercise.sets - 1 
                ? `Concluir Série ${currentSet + 1}` 
                : 'Concluir Exercício'}
            </Button>
          )}
          
          <Button
            onClick={handleNextExercise}
            variant="outline"
            size="lg"
            className="h-14"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
        </div>

        {/* Next Exercise Preview */}
        {currentExerciseIndex < workout.exercises.length - 1 && (
          <div className="bg-muted/50 rounded-xl p-4 border">
            <div className="text-sm font-medium text-muted-foreground mb-2">
              Próximo exercício:
            </div>
            <div className="font-semibold">
              {workout.exercises[currentExerciseIndex + 1].name}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {workout.exercises[currentExerciseIndex + 1].sets} séries × {workout.exercises[currentExerciseIndex + 1].reps} reps
            </div>
          </div>
        )}

        {/* Workout Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-4 text-center border">
            <div className="text-2xl font-bold text-primary">{completedExercises}</div>
            <div className="text-xs text-muted-foreground">Exercícios</div>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border">
            <div className="text-2xl font-bold text-green-500">{formatTime(totalTime)}</div>
            <div className="text-xs text-muted-foreground">Tempo</div>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border">
            <div className="text-2xl font-bold text-orange-500">
              {Math.round((completedExercises * 50) + (totalTime / 60) * 8)}
            </div>
            <div className="text-xs text-muted-foreground">Calorias</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSession;
