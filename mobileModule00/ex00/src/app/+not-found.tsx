import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <Stack.Screen options={{ title: "not found!" }}>
        <View style={styles.container}>
        <Text>Page not found ops</Text>
        <Link href="/">
            Go back to home
        </Link>
        </View>
    </Stack.Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});