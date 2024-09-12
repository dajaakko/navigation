import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-paper";
export default function Details({ navigation }) {
    return (
      <View style={styles.container}>
        <Button mode="elevated" onPress={() => navigation.navigate("Home")}>
          Go back home!
        </Button>
        <Text></Text>
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
  