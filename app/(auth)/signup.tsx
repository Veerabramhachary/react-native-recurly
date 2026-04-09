import { Link } from "expo-router";
import { Text, View } from "react-native";
const signup = () => {
    return (
        <View>
            <Text>signup</Text>
            <Link href="/(auth)/signin">Sign In</Link>
        </View>
    );
};
export default signup;
