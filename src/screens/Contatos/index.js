import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function Contatos() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Contatos</Text>

      <TouchableOpacity style={styles.linha} onPress={() => Alert.alert('Telefone')}>
        <FontAwesome name="phone" size={18} color="#2563EB" />
        <Text style={styles.texto}> (19) 9999-9999</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linha} onPress={() => Alert.alert('WhatsApp')}>
        <FontAwesome name="whatsapp" size={18} color="#25D366" />
        <Text style={styles.texto}> (19) 98888-8888</Text>
      </TouchableOpacity>

      <View style={styles.linha}>
        <FontAwesome name="map-marker" size={18} color="#2563EB" />
        <Text style={styles.texto}> Sumaré - SP</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="id-card" size={18} color="#2563EB" />
        <Text style={styles.texto}> 12.345.678/0001-99</Text>
      </View>

      <TouchableOpacity style={styles.linha} onPress={() => Alert.alert('Email')}>
        <FontAwesome name="envelope" size={18} color="#2563EB" />
        <Text style={styles.texto}> exemplo@gmail.com</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.botaoTexto}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.botaoTexto}>Produtos</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2563EB',
  },

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  texto: {
    marginLeft: 10,
    fontSize: 16,
  },

  botao: {
    marginTop: 10,
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});