import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        🚀 Space Predictive Analytics
      </Text>
      <Text style={{ marginTop: 15, fontSize: 16, textAlign: "center" }}>
        Seja bem vindo ao Space Predictive Analytics! Explore dashboards, alertas e configurações usando as abas abaixo.
      </Text>
    </View>
  );
}