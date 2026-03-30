import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Produtos</Text>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" }} 
            style={styles.img}
          />
          <Text>Tênis Nike</Text>
          <Text>R$ 67,90</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => Alert.alert("Adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" }} 
            style={styles.img}
          />
          <Text>Camiseta Adidas</Text>
          <Text>R$ 37,90</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => Alert.alert("Adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1511732351661-1f8a3c1f9d6c" }} 
            style={styles.img}
          />
          <Text>Relógio Smart</Text>
          <Text>R$ 11,90</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => Alert.alert("Adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1606813902914-6b1f0c1c1c1c" }} 
            style={styles.img}
          />
          <Text>Bola de futebol</Text>
          <Text>R$ 16,90</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => Alert.alert("Adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db" }} 
            style={styles.img}
          />
          <Text> PS5</Text>
          <Text>R$ 4000,99</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => Alert.alert("Adicionado ao carrinho")}
          >
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.botaoNav}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>Voltar para Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoNav}
          onPress={() => navigation.navigate('Contatos')}
        >
          <Text style={styles.textoBotao}>Ir para Contatos</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#F3F4F6',
  padding: 20,
  paddingBottom: 40, 
},

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2563EB',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  img: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },

  botao: {
    backgroundColor: '#22C55E',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  botaoNav: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  }
});