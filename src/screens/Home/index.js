import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Tela Inicial</Text>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Produtos')}
      >
        <FontAwesome name="shopping-cart" size={20} color="#fff" />
        <Text style={styles.textoBotao}>
          Ir para Produtos
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10, 
  },
});