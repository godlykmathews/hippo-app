import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <Feather name="home" size={24} color="coral" />
            );
          },
        }}
      />

      <Tabs.Screen name="Login" options={{ title: "Login" }} />
    </Tabs>
  );
}
