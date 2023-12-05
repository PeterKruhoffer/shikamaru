import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams();
  return (
    <View className="flex-1 p-6">
      <View className="flex-1 max-w-[960]">
        <Text className="text-6xl font-bold">Details</Text>
        <Text className="text-4xl text-gray-700">Showing details for user {name}.</Text>
      </View>
    </View>
  );
}
