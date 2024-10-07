import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacao, setOperacao] = useState('');  // Estado que armazena a operação selecionada
  const navigation = useNavigation();

  const calcular = () => {
    if (!valor1 || !valor2 || !operacao) {
      alert('Por favor, preencha todos os campos e escolha uma operação');
      return;
    }
    navigation.navigate('Resultado', { valor1, valor2, operacao });
  };

  return (
    <View style={styles.container}>
      <Text>Informe o primeiro número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
      />

      <Text>Informe o segundo número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
      />

      <Text>Escolha a operação:</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, operacao === 'Somar' && styles.selectedButton]}
          onPress={() => setOperacao('Somar')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, operacao === 'Subtrair' && styles.selectedButton]}
          onPress={() => setOperacao('Subtrair')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, operacao === 'Multiplicar' && styles.selectedButton]}
          onPress={() => setOperacao('Multiplicar')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, operacao === 'Dividir' && styles.selectedButton]}
          onPress={() => setOperacao('Dividir')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <Button title="Efetuar Cálculo" onPress={calcular} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e1ffdb',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f26000',  
    padding: 15,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
