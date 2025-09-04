import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home screen</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7f7ff",
    fontSize: 40,
    color: "#333",
  },
});
