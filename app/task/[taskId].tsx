import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function TaskScreen() {
  const { taskId } = useLocalSearchParams();
  return (
    <View className="flex justify-center items-center gap-4 p-4">
      <Text className="text-xl">Task Screen {taskId}</Text>
    </View>
  )
}
