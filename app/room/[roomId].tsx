import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function RoomScreen() {
  const { roomId } = useLocalSearchParams();
  return (
    <View>
      <Text>Room Screen {roomId}</Text>
    </View>
  );
}
