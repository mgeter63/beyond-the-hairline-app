-- Create the trigger function that calls the Edge Function via pg_net
CREATE OR REPLACE FUNCTION public.notify_new_user_registration()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM extensions.http_post(
    url := 'https://wyeqjkyglmfwzxdihnun.supabase.co/functions/v1/new-user-notification',
    body := json_build_object(
      'record', json_build_object(
        'id', NEW.id,
        'email', NEW.email,
        'created_at', NEW.created_at
      )
    )::jsonb,
    headers := json_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZXFqa3lnbG1md3p4ZGlobnVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzEwMTU0OSwiZXhwIjoyMDg4Njc3NTQ5fQ.uh6g_dk4jmU9JYQzXqZRehxYdCtMcxqV7QJ-p7IhyOg'
    )::jsonb
  );
  RETURN NEW;
END;
$$;

-- Drop existing trigger if any
DROP TRIGGER IF EXISTS on_new_user_registration ON auth.users;

-- Create the trigger on auth.users for INSERT
CREATE TRIGGER on_new_user_registration
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_user_registration();
