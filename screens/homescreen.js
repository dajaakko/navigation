import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Button mode="elevated" onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
});
