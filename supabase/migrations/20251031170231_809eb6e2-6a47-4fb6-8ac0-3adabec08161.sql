-- Adicionar colunas necessárias na tabela workouts
ALTER TABLE workouts 
ADD COLUMN IF NOT EXISTS category text,
ADD COLUMN IF NOT EXISTS estimated_calories integer,
ADD COLUMN IF NOT EXISTS exercises_data jsonb DEFAULT '[]'::jsonb;

-- Tornar user_id nullable para permitir treinos públicos
ALTER TABLE workouts 
ALTER COLUMN user_id DROP NOT NULL;

-- Remover políticas RLS existentes
DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios treinos" ON workouts;
DROP POLICY IF EXISTS "Usuários podem inserir seus próprios treinos" ON workouts;
DROP POLICY IF EXISTS "Usuários podem ver seus próprios treinos" ON workouts;

-- Criar novas políticas RLS que permitem treinos públicos
CREATE POLICY "Todos podem ver treinos públicos"
ON workouts FOR SELECT
USING (user_id IS NULL OR auth.uid() = user_id);

CREATE POLICY "Usuários podem criar seus próprios treinos"
ON workouts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar seus próprios treinos"
ON workouts FOR UPDATE
USING (auth.uid() = user_id);