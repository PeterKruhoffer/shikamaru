import { View, Text } from 'react-native';

import Account from '../components/Account';
import { useAuth } from '../hooks/useAuth';

export default function AccountScreen() {
  const { session } = useAuth();

  return (
    <View className={styles.container}>
      <View className={styles.main}>
        <Text className={styles.title}>Account</Text>
        {session && session.user.email ? (
          <Account key={session.user.id} session={session} />
        ) : (
          <Text>No session</Text>
        )}
      </View>
    </View>
  );
}

const styles = {
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960]',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
