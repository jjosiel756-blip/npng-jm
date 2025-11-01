-- Add UPDATE policy for body_metrics table
CREATE POLICY "Usuários podem atualizar suas próprias métricas"
ON public.body_metrics
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Add DELETE policy for body_metrics table
CREATE POLICY "Usuários podem deletar suas próprias métricas"
ON public.body_metrics
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);