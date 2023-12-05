import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Overview' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
      <Stack.Screen name="accountScreen" options={{ title: 'Account' }} />
      <Stack.Screen name="room/[roomId]" options={{ title: 'Room' }} />
      <Stack.Screen name="task/[taskId]" options={{ title: 'Task' }} />
    </Stack>
  );
}
