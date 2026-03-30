import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { FontAwesome, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
   <SafeAreaView style={styles.container}>
    <StatusBar style='auto'/>
    <Text> Tela Inicial</Text>


  <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
    <Text>
      Ir para página produtos
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
});