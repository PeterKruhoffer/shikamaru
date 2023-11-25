import { Session } from '@supabase/supabase-js';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Account from '../components/Account';
import Auth from '../components/Auth';
import { supabase } from '../utils/supabase';

export default function Page() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <View className={styles.container}>
      <View className={styles.main}>
        <View>
          <Text className={styles.title}>Hello World</Text>
          <Text className={styles.subtitle}>This is the first page of your app.</Text>
        </View>
        {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
        <Link href={{ pathname: '/details', params: { name: 'Peter' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Show Details</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960] justify-between',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
