-- Trigger types regeneration
-- This migration ensures all tables are properly recognized by TypeScript

-- Add a comment to profiles table to trigger types sync
COMMENT ON TABLE public.profiles IS 'User profile information with nutrition goals and onboarding status';

-- Add comments to other tables for better documentation
COMMENT ON TABLE public.meals IS 'User meal records with nutritional information from AI analysis';
COMMENT ON TABLE public.body_metrics IS 'User body composition metrics over time';
COMMENT ON TABLE public.calories_burned IS 'Daily calorie burn tracking from activities';
COMMENT ON TABLE public.progress_strength IS 'Strength progression tracking for exercises';
COMMENT ON TABLE public.workout_history IS 'Historical record of completed workouts';
COMMENT ON TABLE public.user_goals IS 'User-defined fitness and nutrition goals';
COMMENT ON TABLE public.user_achievements IS 'Gamification achievements and progress';
COMMENT ON TABLE public.workouts IS 'Pre-defined workout routines';
COMMENT ON TABLE public.exercises IS 'Exercise library with details and difficulty levels';