-- Fix function search_path issue - update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name, username)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', NEW.email),
    LOWER(REPLACE(COALESCE(NEW.raw_user_meta_data ->> 'name', NEW.email), ' ', '_'))
  );
  RETURN NEW;
END;
$$;