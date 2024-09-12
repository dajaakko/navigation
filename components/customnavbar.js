import { Appbar } from "react-native-paper";

export default function CustomNavigationBar({ navigation, back}) {
    return (
        <Appbar.Header>
            
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Details")} style={{marginLeft:"auto"}} />}
            
            {back ? <Appbar.Content title="Details page" /> : <Appbar.Content title="Home page" />}
        </Appbar.Header>
    )
}