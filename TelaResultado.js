import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ResultadoScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { valor1, valor2, operacao } = route.params;

  const calcularResultado = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    let resultado = 0;

    switch (operacao) {
      case 'Somar':
        resultado = num1 + num2;
        break;
      case 'Subtrair':
        resultado = num1 - num2;
        break;
      case 'Multiplicar':
        resultado = num1 * num2;
        break;
      case 'Dividir':
        if (num2 === 0) {
          alert('Divisão por zero não permitida');
          return 'Erro';
        }
        resultado = num1 / num2;
        break;
    }

    return resultado;
  };

  return (
    <View style={styles.container}>
      <Text>Valor 1: {valor1}</Text>
      <Text>Valor 2: {valor2}</Text>
      <Text>Operação: {operacao}</Text>
      <Text>Resultado: {calcularResultado()}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1ffdb',
  },
});
