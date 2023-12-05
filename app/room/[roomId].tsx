import { useLocalSearchParams } from 'expo-router';
import { useAtom } from 'jotai';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
          <View className="p-2 h-48 border rounded-lg">
            <Text className="text-lg">{item.taskName}</Text>
            <Text className="text-lg">{item.taskDescription}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-8" />}
      />
    </View>
  );
}
