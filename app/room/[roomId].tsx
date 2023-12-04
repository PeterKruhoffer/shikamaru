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
    <View className="flex flex-1 flex-col items-center w-full gap-4">
      <Text className="text-xl">Room Screen {roomId}</Text>
      <FlatList
        data={currentRoomTaks}
        renderItem={({ item }) => (
          <View className="p-2 border rounded-lg">
            <Text className="text-lg">{item.taskName}</Text>
            <Text className="text-lg">{item.taskDescription}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </View>
  );
}
