-- Inserir treinos públicos (user_id = NULL para treinos disponíveis para todos)

-- Treinos de 7 Minutos
INSERT INTO workouts (name, description, category, duration_minutes, estimated_calories, difficulty, exercises_data, user_id) VALUES
('Circuito 7 Minutos - Iniciante', 'Treino rápido e eficiente para o corpo inteiro - Ideal para começar o dia!', '7_minute', 7, 80, 'beginner', 
'[
  {"nome": "Polichinelos", "duracao": 30, "descanso": 10, "repeticoes": null, "ilustracao": "👤", "descricao": "Salte abrindo pernas e braços"},
  {"nome": "Agachamento Livre", "duracao": 30, "descanso": 10, "repeticoes": 12, "ilustracao": "🦵", "descricao": "Agache mantendo as costas retas"},
  {"nome": "Flexão de Joelhos", "duracao": 30, "descanso": 10, "repeticoes": 10, "ilustracao": "💪", "descricao": "Flexões com joelhos apoiados"},
  {"nome": "Prancha", "duracao": 30, "descanso": 10, "repeticoes": null, "ilustracao": "🧘", "descricao": "Mantenha o corpo reto em prancha"},
  {"nome": "Elevação de Joelhos", "duracao": 30, "descanso": 10, "repeticoes": 15, "ilustracao": "🦵", "descricao": "Eleve os joelhos alternadamente"},
  {"nome": "Abdominais", "duracao": 30, "descanso": 10, "repeticoes": 15, "ilustracao": "💪", "descricao": "Contraia o abdômen"},
  {"nome": "Corrida Parada", "duracao": 30, "descanso": 10, "repeticoes": null, "ilustracao": "🏃", "descricao": "Corra no lugar elevando os joelhos"}
]'::jsonb, NULL),

('Circuito 7 Minutos - Avançado', 'Versão intensa do circuito de 7 minutos para quem já tem condicionamento', '7_minute', 7, 120, 'advanced',
'[
  {"nome": "Burpees", "duracao": 30, "descanso": 10, "repeticoes": 10, "ilustracao": "⚡", "descricao": "Movimento completo com salto"},
  {"nome": "Flexões", "duracao": 30, "descanso": 10, "repeticoes": 15, "ilustracao": "💪", "descricao": "Flexões tradicionais"},
  {"nome": "Agachamento com Salto", "duracao": 30, "descanso": 10, "repeticoes": 12, "ilustracao": "🦵", "descricao": "Agache e salte"},
  {"nome": "Prancha com Elevação", "duracao": 30, "descanso": 10, "repeticoes": null, "ilustracao": "🧘", "descricao": "Prancha elevando braços"},
  {"nome": "Mountain Climbers", "duracao": 30, "descanso": 10, "repeticoes": 20, "ilustracao": "⛰️", "descricao": "Escale rapidamente"},
  {"nome": "Abdominais Cruzados", "duracao": 30, "descanso": 10, "repeticoes": 20, "ilustracao": "💪", "descricao": "Toque cotovelo no joelho oposto"},
  {"nome": "Jumping Jacks", "duracao": 30, "descanso": 10, "repeticoes": 25, "ilustracao": "👤", "descricao": "Polichinelos intensos"}
]'::jsonb, NULL),

-- Treinos Full Body
('Full Body - Iniciante', 'Treino completo para todo o corpo, ideal para quem está começando', 'full_body', 30, 180, 'beginner',
'[
  {"nome": "Agachamento Livre", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🦵", "descricao": "Agachamento básico"},
  {"nome": "Flexão de Joelhos", "series": 3, "repeticoes": 10, "descanso": 60, "ilustracao": "💪", "descricao": "Flexões modificadas"},
  {"nome": "Prancha", "series": 3, "duracao": 30, "descanso": 60, "ilustracao": "🧘", "descricao": "Prancha isométrica"},
  {"nome": "Afundo", "series": 3, "repeticoes": 10, "descanso": 60, "ilustracao": "🦵", "descricao": "Afundo alternado"},
  {"nome": "Superman", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🦸", "descricao": "Eleve braços e pernas simultaneamente"}
]'::jsonb, NULL),

('Full Body - Avançado', 'Treino intenso para desenvolver força e resistência em todo o corpo', 'full_body', 45, 350, 'advanced',
'[
  {"nome": "Agachamento com Salto", "series": 4, "repeticoes": 15, "descanso": 60, "ilustracao": "🦵", "descricao": "Agache e salte explosivamente"},
  {"nome": "Flexões", "series": 4, "repeticoes": 20, "descanso": 60, "ilustracao": "💪", "descricao": "Flexões tradicionais"},
  {"nome": "Burpees", "series": 4, "repeticoes": 12, "descanso": 60, "ilustracao": "⚡", "descricao": "Movimento completo"},
  {"nome": "Prancha Lateral", "series": 3, "duracao": 45, "descanso": 60, "ilustracao": "🧘", "descricao": "Prancha de lado"},
  {"nome": "Pull-ups", "series": 4, "repeticoes": 10, "descanso": 90, "ilustracao": "💪", "descricao": "Barra fixa"},
  {"nome": "Lunges com Salto", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🦵", "descricao": "Afundo com troca de pernas"}
]'::jsonb, NULL),

-- Treinos de Abdômen  
('Abdômen Definido', 'Foco total na região abdominal para definição muscular', 'abs', 20, 120, 'intermediate',
'[
  {"nome": "Abdominal Tradicional", "series": 4, "repeticoes": 20, "descanso": 45, "ilustracao": "💪", "descricao": "Suba contraindo o abdômen"},
  {"nome": "Prancha", "series": 3, "duracao": 60, "descanso": 45, "ilustracao": "🧘", "descricao": "Mantenha posição"},
  {"nome": "Abdominal Bicicleta", "series": 3, "repeticoes": 20, "descanso": 45, "ilustracao": "🚴", "descricao": "Movimento de pedalar"},
  {"nome": "Elevação de Pernas", "series": 3, "repeticoes": 15, "descanso": 45, "ilustracao": "🦵", "descricao": "Eleve as pernas retas"},
  {"nome": "Russian Twist", "series": 3, "repeticoes": 25, "descanso": 45, "ilustracao": "🔄", "descricao": "Torção do tronco"},
  {"nome": "Prancha Lateral", "series": 3, "duracao": 30, "descanso": 45, "ilustracao": "🧘", "descricao": "Cada lado"}
]'::jsonb, NULL),

('Abdômen Iniciante', 'Treino suave para fortalecer o core e abdômen', 'abs', 15, 80, 'beginner',
'[
  {"nome": "Abdominal Parcial", "series": 3, "repeticoes": 12, "descanso": 45, "ilustracao": "💪", "descricao": "Suba apenas parcialmente"},
  {"nome": "Prancha", "series": 3, "duracao": 20, "descanso": 45, "ilustracao": "🧘", "descricao": "Posição de prancha"},
  {"nome": "Dead Bug", "series": 3, "repeticoes": 10, "descanso": 45, "ilustracao": "🐛", "descricao": "Movimento controlado"},
  {"nome": "Bird Dog", "series": 3, "repeticoes": 10, "descanso": 45, "ilustracao": "🐕", "descricao": "Braço e perna opostos"}
]'::jsonb, NULL),

-- Treinos HIIT
('HIIT Queima Gordura', 'Treino intervalado de alta intensidade para máxima queima calórica', 'hiit', 20, 280, 'intermediate',
'[
  {"nome": "Burpees", "intervalo": "40s trabalho / 20s descanso", "rounds": 4, "ilustracao": "⚡", "descricao": "Movimento explosivo completo"},
  {"nome": "Mountain Climbers", "intervalo": "40s trabalho / 20s descanso", "rounds": 4, "ilustracao": "⛰️", "descricao": "Escalada rápida"},
  {"nome": "High Knees", "intervalo": "40s trabalho / 20s descanso", "rounds": 4, "ilustracao": "🏃", "descricao": "Joelhos ao alto"},
  {"nome": "Jumping Jacks", "intervalo": "40s trabalho / 20s descanso", "rounds": 4, "ilustracao": "👤", "descricao": "Polichinelos intensos"},
  {"nome": "Agachamento com Salto", "intervalo": "40s trabalho / 20s descanso", "rounds": 4, "ilustracao": "🦵", "descricao": "Explosão nas pernas"}
]'::jsonb, NULL),

('HIIT Cardio Intenso', 'Cardio de alta intensidade para resistência cardiovascular', 'hiit', 25, 320, 'advanced',
'[
  {"nome": "Sprint no Lugar", "intervalo": "30s trabalho / 15s descanso", "rounds": 6, "ilustracao": "🏃", "descricao": "Corrida máxima intensidade"},
  {"nome": "Burpees", "intervalo": "30s trabalho / 15s descanso", "rounds": 6, "ilustracao": "⚡", "descricao": "Movimento completo"},
  {"nome": "Skaters", "intervalo": "30s trabalho / 15s descanso", "rounds": 6, "ilustracao": "⛸️", "descricao": "Saltos laterais"},
  {"nome": "Box Jumps", "intervalo": "30s trabalho / 15s descanso", "rounds": 6, "ilustracao": "📦", "descricao": "Saltos explosivos"},
  {"nome": "Tuck Jumps", "intervalo": "30s trabalho / 15s descanso", "rounds": 6, "ilustracao": "🦘", "descricao": "Joelhos ao peito no salto"}
]'::jsonb, NULL),

-- Treinos de Força
('Força Upper Body', 'Desenvolvimento de força na parte superior do corpo', 'strength', 40, 200, 'intermediate',
'[
  {"nome": "Flexões", "series": 4, "repeticoes": 15, "descanso": 90, "ilustracao": "💪", "descricao": "Flexões tradicionais"},
  {"nome": "Dips", "series": 4, "repeticoes": 12, "descanso": 90, "ilustracao": "💪", "descricao": "Tríceps na paralela"},
  {"nome": "Pike Push-ups", "series": 3, "repeticoes": 10, "descanso": 90, "ilustracao": "💪", "descricao": "Flexão ombros"},
  {"nome": "Diamond Push-ups", "series": 3, "repeticoes": 10, "descanso": 90, "ilustracao": "💎", "descricao": "Mãos juntas"},
  {"nome": "Prancha com Toque", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🧘", "descricao": "Toque ombros alternados"}
]'::jsonb, NULL),

('Força Lower Body', 'Desenvolvimento de força e potência nas pernas', 'strength', 35, 250, 'intermediate',
'[
  {"nome": "Agachamento Búlgaro", "series": 4, "repeticoes": 12, "descanso": 90, "ilustracao": "🦵", "descricao": "Perna traseira elevada"},
  {"nome": "Pistol Squats", "series": 3, "repeticoes": 8, "descanso": 90, "ilustracao": "🦵", "descricao": "Agachamento unilateral"},
  {"nome": "Afundo Caminhando", "series": 3, "repeticoes": 15, "descanso": 60, "ilustracao": "🦵", "descricao": "Afundo alternado"},
  {"nome": "Glute Bridge", "series": 4, "repeticoes": 20, "descanso": 60, "ilustracao": "🍑", "descricao": "Elevação pélvica"},
  {"nome": "Calf Raises", "series": 4, "repeticoes": 25, "descanso": 45, "ilustracao": "🦵", "descricao": "Elevação de panturrilha"}
]'::jsonb, NULL),

-- Treinos de Pernas
('Pernas Esculpidas', 'Treino focado em definição e tonificação das pernas e glúteos', 'legs', 30, 220, 'intermediate',
'[
  {"nome": "Agachamento Sumô", "series": 4, "repeticoes": 15, "descanso": 60, "ilustracao": "🦵", "descricao": "Pernas afastadas, pontas para fora"},
  {"nome": "Elevação Pélvica", "series": 3, "repeticoes": 20, "descanso": 60, "ilustracao": "🍑", "descricao": "Glúteos contraídos"},
  {"nome": "Afundo Reverso", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🦵", "descricao": "Passo para trás"},
  {"nome": "Fire Hydrant", "series": 3, "repeticoes": 15, "descanso": 45, "ilustracao": "🔥", "descricao": "Elevação lateral da perna"},
  {"nome": "Cadeira", "series": 3, "duracao": 45, "descanso": 60, "ilustracao": "🪑", "descricao": "Posição sentada na parede"},
  {"nome": "Donkey Kicks", "series": 3, "repeticoes": 15, "descanso": 45, "ilustracao": "🦵", "descricao": "Chute para trás"}
]'::jsonb, NULL),

('Pernas Potência', 'Desenvolvimento de força e potência nas pernas', 'legs', 35, 280, 'advanced',
'[
  {"nome": "Agachamento Profundo", "series": 5, "repeticoes": 12, "descanso": 90, "ilustracao": "🦵", "descricao": "Agachamento completo"},
  {"nome": "Afundo com Salto", "series": 4, "repeticoes": 10, "descanso": 90, "ilustracao": "🦵", "descricao": "Alternado explosivo"},
  {"nome": "Box Jumps", "series": 4, "repeticoes": 12, "descanso": 90, "ilustracao": "📦", "descricao": "Saltos na caixa"},
  {"nome": "Pistol Squats", "series": 3, "repeticoes": 8, "descanso": 90, "ilustracao": "🦵", "descricao": "Agachamento uma perna"},
  {"nome": "Jump Squats", "series": 4, "repeticoes": 15, "descanso": 75, "ilustracao": "🦵", "descricao": "Agachamento com salto"}
]'::jsonb, NULL),

-- Treinos de Costas
('Costas Fortes', 'Fortalecimento da musculatura das costas e postura', 'back', 30, 180, 'intermediate',
'[
  {"nome": "Superman", "series": 4, "repeticoes": 15, "descanso": 60, "ilustracao": "🦸", "descricao": "Braços e pernas elevados"},
  {"nome": "Pull-ups", "series": 4, "repeticoes": 8, "descanso": 90, "ilustracao": "💪", "descricao": "Barra fixa"},
  {"nome": "Remada Invertida", "series": 4, "repeticoes": 12, "descanso": 75, "ilustracao": "🚣", "descricao": "Corpo inclinado"},
  {"nome": "Bird Dog", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🐕", "descricao": "Braço e perna opostos"},
  {"nome": "Cobra", "series": 3, "repeticoes": 12, "descanso": 45, "ilustracao": "🐍", "descricao": "Extensão das costas"}
]'::jsonb, NULL),

('Postura Perfeita', 'Exercícios para melhorar postura e aliviar dores nas costas', 'back', 25, 120, 'beginner',
'[
  {"nome": "Cat-Cow", "series": 3, "repeticoes": 15, "descanso": 45, "ilustracao": "🐱", "descricao": "Movimentos alternados"},
  {"nome": "Child Pose", "series": 3, "duracao": 30, "descanso": 30, "ilustracao": "🧘", "descricao": "Postura de descanso"},
  {"nome": "Superman", "series": 3, "repeticoes": 12, "descanso": 60, "ilustracao": "🦸", "descricao": "Fortalecimento lombar"},
  {"nome": "Bridge", "series": 3, "repeticoes": 15, "descanso": 60, "ilustracao": "🌉", "descricao": "Ponte com ativação"},
  {"nome": "Wall Angels", "series": 3, "repeticoes": 12, "descanso": 45, "ilustracao": "👼", "descricao": "Braços na parede"}
]'::jsonb, NULL),

-- Treinos de Cardio
('Cardio Queima', 'Treino cardiovascular para queima de calorias e resistência', 'cardio', 30, 300, 'intermediate',
'[
  {"nome": "Polichinelos", "duracao": 60, "descanso": 30, "ilustracao": "👤", "descricao": "Movimento contínuo"},
  {"nome": "High Knees", "duracao": 60, "descanso": 30, "ilustracao": "🏃", "descricao": "Joelhos altos"},
  {"nome": "Butt Kicks", "duracao": 60, "descanso": 30, "ilustracao": "🦵", "descricao": "Calcanhares aos glúteos"},
  {"nome": "Skaters", "duracao": 60, "descanso": 30, "ilustracao": "⛸️", "descricao": "Saltos laterais"},
  {"nome": "Mountain Climbers", "duracao": 60, "descanso": 30, "ilustracao": "⛰️", "descricao": "Escalada rápida"},
  {"nome": "Jumping Jacks", "duracao": 60, "descanso": 30, "ilustracao": "👤", "descricao": "Polichinelos"},
  {"nome": "Corrida Parada", "duracao": 120, "descanso": 60, "ilustracao": "🏃", "descricao": "Corrida no lugar"}
]'::jsonb, NULL),

('Cardio em Casa', 'Treino cardiovascular sem equipamentos para fazer em casa', 'cardio', 25, 200, 'beginner',
'[
  {"nome": "Marcha no Lugar", "duracao": 90, "descanso": 30, "ilustracao": "🚶", "descricao": "Caminhar elevando joelhos"},
  {"nome": "Step Ups Simulado", "duracao": 60, "descanso": 30, "ilustracao": "🪜", "descricao": "Subir e descer"},
  {"nome": "Polichinelos Leves", "duracao": 60, "descanso": 30, "ilustracao": "👤", "descricao": "Ritmo moderado"},
  {"nome": "Side Steps", "duracao": 60, "descanso": 30, "ilustracao": "↔️", "descricao": "Passos laterais"},
  {"nome": "Arm Circles", "duracao": 60, "descanso": 30, "ilustracao": "🔄", "descricao": "Círculos com os braços"},
  {"nome": "Twist", "duracao": 60, "descanso": 30, "ilustracao": "🔄", "descricao": "Rotação do tronco"}
]'::jsonb, NULL);