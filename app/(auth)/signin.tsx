import { Link } from "expo-router";
import { Text, View } from "react-native";
const signin = () => {
    return (
        <View>
            <Text>signin</Text>
            <Link href="/(auth)/signup">Create Account</Link>
        </View>
    );
};
export default signin;
