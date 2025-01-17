import "@/global.css";
import { Stack } from "expo-router";
const HomeLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(tabs)"
      />
    </Stack>
  );
};

export default HomeLayout;
