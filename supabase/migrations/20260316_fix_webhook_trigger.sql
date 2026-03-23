CREATE OR REPLACE FUNCTION public.notify_new_user_registration()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM net.http_post(
    'https://wyeqjkyglmfwzxdihnun.supabase.co/functions/v1/new-user-notification',
    json_build_object(
      'record', json_build_object(
        'id', NEW.id,
        'email', NEW.email,
        'created_at', NEW.created_at
      )
    )::jsonb,
    '{}'::jsonb,
    json_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZXFqa3lnbG1md3p4ZGlobnVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzEwMTU0OSwiZXhwIjoyMDg4Njc3NTQ5fQ.uh6g_dk4jmU9JYQzXqZRehxYdCtMcxqV7QJ-p7IhyOg'
    )::jsonb
  );
  RETURN NEW;
END;
$$;
