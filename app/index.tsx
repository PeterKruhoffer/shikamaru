import { Link } from 'expo-router';
import { atom, useAtom } from 'jotai';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';

import Auth from '../components/Auth';
import { useAuth } from '../hooks/useAuth';

const room1 = {
  roomId: '1',
  roomName: 'Room 1',
  tasks: [
    {
      taskId: '1',
      taskName: 'Task 1',
      taskDescription: 'Task 1 description',
    },
    {
      taskId: '2',
      taskName: 'Task 2',
      taskDescription: 'Task 2 description',
    },
    {
      taskId: '3',
      taskName: 'Task 3',
      taskDescription: 'Task 3 description',
    },
  ],
};
const room2 = {
  roomId: '2',
  roomName: 'Room 2',
  tasks: [
    {
      taskId: '1',
      taskName: 'Task 1',
      taskDescription: 'Task 1 description',
    },
    {
      taskId: '2',
      taskName: 'Task 2',
      taskDescription: 'Task 2 description',
    },
    {
      taskId: '3',
      taskName: 'Task 3',
      taskDescription: 'Task 3 description',
    },
  ],
};

export const roomsAtom = atom([room1, room2]);

export default function Page() {
  const { session } = useAuth();
  const [rooms] = useAtom(roomsAtom);

  return (
    <View className={styles.container}>
      <View className={styles.main}>
        <View>
          <Text className={styles.title}>Hello World</Text>
          <FlatList
            data={rooms}
            ItemSeparatorComponent={() => <View className="h-8 bg-stone-100" />}
            renderItem={({ item }) => (
              <Link
                href={{ pathname: '/room/[roomId]', params: { roomId: item.roomId } }}
                className="rounded-lg"
                asChild>
                <Text className="bg-stone-900 h-40 text-xl text-stone-100 p-2">
                  {item.roomName}
                </Text>
              </Link>
            )}
            keyExtractor={(item) => item.roomId.toString()}
          />
        </View>
        <Link href={{ pathname: '/details', params: { name: 'Peter' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Show Details</Text>
          </TouchableOpacity>
        </Link>
        {session === null ? (
          <Auth />
        ) : (
          <Link href={{ pathname: '/accountScreen' }} asChild>
            <TouchableOpacity className={styles.button}>
              <Text className={styles.buttonText}>Account</Text>
            </TouchableOpacity>
          </Link>
        )}
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
