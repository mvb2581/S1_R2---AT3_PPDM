import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Contatos() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Contatos</Text>

      <TouchableOpacity onPress={() => Alert.alert('Telefone')}>
        <Text style={styles.texto}>Telefone: (19) 9999-9999</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('WhatsApp')}>
        <Text style={styles.texto}>WhatsApp: (19) 98888-8888</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>Sumaré - SP</Text>
      <Text style={styles.texto}>CNPJ: 12.345.678/0001-99</Text>

      <TouchableOpacity onPress={() => Alert.alert('Email')}>
        <Text style={styles.texto}>exemplo@gmail.com</Text>
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
  },

  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },

  texto: {
    marginBottom: 5,
  },

  botao: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8
  },

  botaoTexto: {
    color: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2563EB',
  }
});