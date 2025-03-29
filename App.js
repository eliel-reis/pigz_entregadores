import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Ionicons, Feather} from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,

} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

import TelaLogin from "./components/TelaLogin";
import TelaNovaEntrega from "./components/TelaNovaEntrega";

import TelaVisaoGeral from "./components/TelaVisaoGeral";
import TelaAviso from "./components/TelaAviso";



function BottomTabs() {
  return(
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#FA641E",
    }}

    initialRouteName="Visão geral"
  >
    <Tabs.Screen  options={{
      tabBarIcon: ({color, size}) => {
        return(
          <Ionicons name="receipt-outline" size={size} color={color} />
        )
      }
    }} name="Relátorios" component={TelaAviso} />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color, size}) => {
          return(
            <Feather name="home" size={size} color={color} />
          )
        }
      }}
    name="Visão geral" component={TelaVisaoGeral} />
    <Tabs.Screen
      options={{
        tabBarIcon:({color, size}) => {
          return(
            <Feather name="user" size={size} color={color} />
          )
        }
      }}
    name="Perfil" component={TelaAviso} />
  </Tabs.Navigator>
)
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#FA641E",
          headerTitleStyle: { color: "black", marginLeft: "40%" },
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={TelaLogin}
        />
        <Stack.Screen name="Visão geral" component={BottomTabs} />

        <Stack.Screen name="Nova entrega" component={TelaNovaEntrega} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
