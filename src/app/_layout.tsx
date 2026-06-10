import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: () => "🏠",
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboards",
          tabBarIcon: () => "📊",
        }}
      />
      <Tabs.Screen
        name="alertas"
        options={{
          title: "Alertas",
          tabBarIcon: () => "⚠️",
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: "Configurações",
          tabBarIcon: () => "⚙️",
        }}
      />
    </Tabs>
  );
}
 