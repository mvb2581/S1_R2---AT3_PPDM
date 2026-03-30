import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home"
import Produtos from "./src/screens/Produtos";
import Contatos from "./src/screens/Contatos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Página Inicial"
          }}
        />

       
        <Stack.Screen name="Produtos" component={Produtos} />

        
        <Stack.Screen name="Contatos" component={Contatos} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}