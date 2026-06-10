import { Text, View, Switch } from "react-native";
import { useState } from "react";

export default function ConfiguracoesScreen() {
  const [notificacoes, setNotificacoes] = useState(true);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>⚙️ Configurações</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>Ativar notificações:</Text>
      <Switch
        value={notificacoes}
        onValueChange={setNotificacoes}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}