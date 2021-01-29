import Link from "next/link";
import { View, Text } from "react-native";

export default function IndexPage() {
  return (
    <View style={{ paddingTop: 100 }}>
      <Text>Hello World.</Text>
      <Link href="/about">
        <a>About</a>
      </Link>
    </View>
  );
}
