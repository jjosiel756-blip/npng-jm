import React from 'react';

interface AnimatedExerciseProps {
  animation: string;
  size?: 'small' | 'medium' | 'large';
}

const AnimatedExercise: React.FC<AnimatedExerciseProps> = ({ animation, size = 'medium' }) => {
  const sizeClass = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-64 h-64'
  };

  // Animação de Supino Reto
  const SupinoRetoAnimation = () => (
    <svg className={`${sizeClass[size]} animate-bounce-slow`} viewBox="0 0 100 100">
      {/* Banco */}
      <rect x="10" y="60" width="80" height="5" fill="#8B4513" />
      
      {/* Corpo */}
      <ellipse cx="50" cy="45" rx="25" ry="15" fill="#FFB6C1" />
      
      {/* Braços animados */}
      <g className="animate-pump">
        <path d="M25,45 L15,30" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M75,45 L85,30" stroke="#FFB6C1" strokeWidth="3" />
        
        {/* Halteres */}
        <circle cx="15" cy="30" r="5" fill="#4A5568" />
        <circle cx="85" cy="30" r="5" fill="#4A5568" />
      </g>
    </svg>
  );

  // Animação de Agachamento
  const AgachamentoAnimation = () => (
    <svg className={`${sizeClass[size]} animate-squat`} viewBox="0 0 100 100">
      {/* Cabeça */}
      <circle cx="50" cy="30" r="15" fill="#FFB6C1" />
      {/* Corpo */}
      <path d="M50,45 L50,70" stroke="#FFB6C1" strokeWidth="4" />
      
      {/* Pernas animadas */}
      <g className="animate-legs">
        <path d="M50,70 L35,90" stroke="#FFB6C1" strokeWidth="4" />
        <path d="M50,70 L65,90" stroke="#FFB6C1" strokeWidth="4" />
      </g>
    </svg>
  );

  // Animação de Crucifixo
  const CrucifixoAnimation = () => (
    <svg className={`${sizeClass[size]} animate-bounce-slow`} viewBox="0 0 100 100">
      <rect x="10" y="60" width="80" height="5" fill="#8B4513" />
      <ellipse cx="50" cy="45" rx="25" ry="15" fill="#FFB6C1" />
      <g className="animate-pump">
        <path d="M25,45 L10,45" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M75,45 L90,45" stroke="#FFB6C1" strokeWidth="3" />
        <circle cx="10" cy="45" r="5" fill="#4A5568" />
        <circle cx="90" cy="45" r="5" fill="#4A5568" />
      </g>
    </svg>
  );

  // Animação de Remada
  const RemadaAnimation = () => (
    <svg className={`${sizeClass[size]} animate-pump`} viewBox="0 0 100 100">
      <rect x="10" y="50" width="30" height="5" fill="#8B4513" />
      <ellipse cx="50" cy="40" rx="20" ry="12" fill="#FFB6C1" transform="rotate(-15 50 40)" />
      <g className="animate-pump">
        <path d="M60,40 L75,50" stroke="#FFB6C1" strokeWidth="3" />
        <circle cx="75" cy="50" r="5" fill="#4A5568" />
      </g>
    </svg>
  );

  // Animação de Corrida
  const CorridaAnimation = () => (
    <svg className={`${sizeClass[size]} animate-bounce-slow`} viewBox="0 0 100 100">
      <circle cx="50" cy="25" r="12" fill="#FFB6C1" />
      <path d="M50,37 L50,60" stroke="#FFB6C1" strokeWidth="3" />
      <g className="animate-legs">
        <path d="M50,60 L40,85" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M50,60 L60,75" stroke="#FFB6C1" strokeWidth="3" />
      </g>
      <g className="animate-pump">
        <path d="M50,45 L35,35" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M50,45 L65,55" stroke="#FFB6C1" strokeWidth="3" />
      </g>
    </svg>
  );

  // Animação de Desenvolvimento
  const DesenvolvimentoAnimation = () => (
    <svg className={`${sizeClass[size]} animate-pump`} viewBox="0 0 100 100">
      <circle cx="50" cy="40" r="15" fill="#FFB6C1" />
      <path d="M50,55 L50,75" stroke="#FFB6C1" strokeWidth="4" />
      <g className="animate-pump">
        <path d="M35,50 L20,30" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M65,50 L80,30" stroke="#FFB6C1" strokeWidth="3" />
        <circle cx="20" cy="30" r="5" fill="#4A5568" />
        <circle cx="80" cy="30" r="5" fill="#4A5568" />
      </g>
    </svg>
  );

  // Animação de Rosca
  const RoscaAnimation = () => (
    <svg className={`${sizeClass[size]} animate-pump`} viewBox="0 0 100 100">
      <circle cx="50" cy="35" r="15" fill="#FFB6C1" />
      <path d="M50,50 L50,75" stroke="#FFB6C1" strokeWidth="4" />
      <g className="animate-pump">
        <path d="M35,55 L30,40" stroke="#FFB6C1" strokeWidth="3" />
        <path d="M65,55 L70,40" stroke="#FFB6C1" strokeWidth="3" />
        <circle cx="30" cy="40" r="5" fill="#4A5568" />
        <circle cx="70" cy="40" r="5" fill="#4A5568" />
      </g>
    </svg>
  );

  // Animação de Abdominal
  const AbdominalAnimation = () => (
    <svg className={`${sizeClass[size]} animate-squat`} viewBox="0 0 100 100">
      <rect x="10" y="70" width="80" height="3" fill="#8B4513" />
      <g className="animate-squat">
        <circle cx="50" cy="30" r="12" fill="#FFB6C1" />
        <ellipse cx="50" cy="50" rx="20" ry="15" fill="#FFB6C1" />
      </g>
      <path d="M50,65 L45,75" stroke="#FFB6C1" strokeWidth="3" />
      <path d="M50,65 L55,75" stroke="#FFB6C1" strokeWidth="3" />
    </svg>
  );

  // Animação de Elevação Pélvica
  const ElevacaoPelvicaAnimation = () => (
    <svg className={`${sizeClass[size]} animate-squat`} viewBox="0 0 100 100">
      <rect x="10" y="70" width="80" height="3" fill="#8B4513" />
      <g className="animate-pump">
        <circle cx="50" cy="35" r="12" fill="#FFB6C1" />
        <ellipse cx="50" cy="50" rx="25" ry="12" fill="#FFB6C1" />
      </g>
      <path d="M35,60 L30,70" stroke="#FFB6C1" strokeWidth="3" />
      <path d="M65,60 L70,70" stroke="#FFB6C1" strokeWidth="3" />
    </svg>
  );

  const animations: Record<string, React.ReactNode> = {
    'supino_reto': <SupinoRetoAnimation />,
    'agachamento_livre': <AgachamentoAnimation />,
    'crucifixo': <CrucifixoAnimation />,
    'remada_halter': <RemadaAnimation />,
    'remada_barra': <RemadaAnimation />,
    'corrida': <CorridaAnimation />,
    'desenvolvimento': <DesenvolvimentoAnimation />,
    'desenvolvimento_halteres': <DesenvolvimentoAnimation />,
    'rosca_direta': <RoscaAnimation />,
    'triceps_testa': <RoscaAnimation />,
    'barra_fixa': <RemadaAnimation />,
    'leg_press': <AgachamentoAnimation />,
    'elevacao_pelvica': <ElevacaoPelvicaAnimation />,
    'elevacao_lateral': <DesenvolvimentoAnimation />,
    'levantamento_terra': <AgachamentoAnimation />,
    'abdominal_supra': <AbdominalAnimation />,
    'aducao': <AgachamentoAnimation />
  };

  return (
    <div className="flex items-center justify-center">
      {animations[animation] || (
        <div className="flex items-center justify-center text-muted-foreground text-sm">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            💪
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedExercise;
