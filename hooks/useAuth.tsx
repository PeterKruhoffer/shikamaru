import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { supabase } from '../utils/supabase';

export function useAuth() {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return {
    session,
  };
}
