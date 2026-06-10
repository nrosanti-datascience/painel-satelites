import { Text, View, ScrollView } from "react-native";

export default function DashboardScreen() {
  // Dados simulados dos satélites
  const satelites = [
    { nome: "Satélite 1", valor: 180, cor: "#4a90e2" },
    { nome: "Satélite 2", valor: 300, cor: "#50e3c2" },
    { nome: "Satélite 3", valor: 120, cor: "#f5a623" },
    { nome: "Satélite 4", valor: 350, cor: "#e94e77" },
    { nome: "Satélite 5", valor: 200, cor: "#7b68ee" },
    { nome: "Satélite 6", valor: 250, cor: "#20c997" },
    { nome: "Satélite 7", valor: 280, cor: "#ff6347" },
    { nome: "Satélite 8", valor: 150, cor: "#6c757d" },
    { nome: "Satélite 9", valor: 320, cor: "#17a2b8" },
    { nome: "Satélite 10", valor: 210, cor: "#ffc107" },
    { nome: "Satélite 11", valor: 270, cor: "#dc3545" },
    { nome: "Satélite 12", valor: 230, cor: "#28a745" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
          📊 Atividade dos Satélites
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 30 }}>
          Monitoramento de desempenho e status operacional.
        </Text>

        {/* Gráfico de barras dinâmico */}
        <View style={{ marginBottom: 50, alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "flex-end", flexWrap: "wrap", justifyContent: "center", height: 400 }}>
            {satelites.map((sat, index) => (
              <View key={index} style={{ alignItems: "center", marginHorizontal: 8, marginBottom: 20 }}>
                <View style={{ width: 60, height: sat.valor, backgroundColor: sat.cor, borderRadius: 10 }} />
                <Text style={{ marginTop: 6, fontWeight: "bold", fontSize: 12 }}>{sat.nome}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Cards de métricas */}
        <View style={{ marginBottom: 60 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 15, textAlign: "center" }}>Métricas Recentes</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ backgroundColor: "#d1e7dd", padding: 20, borderRadius: 12, width: 120, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Satélites</Text>
              <Text style={{ fontSize: 22 }}>12</Text>
            </View>
            <View style={{ backgroundColor: "#fff3cd", padding: 20, borderRadius: 12, width: 120, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Alertas</Text>
              <Text style={{ fontSize: 22 }}>3</Text>
            </View>
            <View style={{ backgroundColor: "#f8d7da", padding: 20, borderRadius: 12, width: 120, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Falhas</Text>
              <Text style={{ fontSize: 22 }}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
 