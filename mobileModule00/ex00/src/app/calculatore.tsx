import { StyleSheet, Text, View } from "react-native";
export default function Calculatore() {
  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
    </View>
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