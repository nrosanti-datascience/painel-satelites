import { Text, View } from "react-native";

export default function AlertasScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>⚠️ Alertas do Sistema</Text>
      <Text style={{ marginTop: 10, fontSize: 16, textAlign: "center" }}>
        - Satélite 3 apresentou falha de comunicação.{"\n"}
        - Previsão de tempestade solar em 48h.{"\n"}
        - Sensor Y detectou anomalia térmica.
      </Text>
    </View>
  );
}
 