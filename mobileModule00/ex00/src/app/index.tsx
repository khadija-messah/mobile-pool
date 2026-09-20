import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>A simple text.</Text>
      <Pressable style={styles.Button} onPress={() => console.log("Button pressed!")} >
        <Text style={styles.ButtonText}>Click me!</Text>
      </Pressable>
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
  Button: {
    fontFamily: "Arial",
    backgroundColor: "#d61ba7",
    padding: 10,
    borderRadius: 5,

  },
  ButtonText: {
    color: "#fff",
  },
});
