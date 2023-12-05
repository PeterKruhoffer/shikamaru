import { Link, useLocalSearchParams } from 'expo-router';
import { useAtom } from 'jotai';
import { View, Text, FlatList, Pressable } from 'react-native';

import { roomsAtom } from '../index';

export default function RoomScreen() {
  const [room] = useAtom(roomsAtom);
  const { roomId } = useLocalSearchParams();

  const currentRoomTaks = room.find((room) => room.roomId === roomId)?.tasks;

  return (
    <View className="flex flex-1 flex-col items-center gap-4">
      <Text className="text-xl">Room Screen {roomId}</Text>
      <FlatList
        className="w-full p-4"
        data={currentRoomTaks}
        renderItem={({ item }) => (
          <Link href={`/task/${item.taskId}`} asChild>
            <Pressable className="p-2 h-48 border rounded-lg w-full">
              <Text className="text-lg">{item.taskName}</Text>
              <Text className="text-lg">{item.taskDescription}</Text>
            </Pressable>
          </Link>
        )}
        ItemSeparatorComponent={() => <View className="h-8" />}
      />
    </View>
  );
}
