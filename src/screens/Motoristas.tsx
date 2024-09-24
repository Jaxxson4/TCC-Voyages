import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TrackingProgress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Acompanhamento da entrega</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.progressContainer}
      >
        {/* Primeiro ponto */}
        <View style={styles.item}>
          <View style={styles.circle} />
          <Text style={styles.label}>Pedido feito</Text>
          <Text style={styles.date}>12/03/2024</Text>
          <Text style={styles.time}>12:36</Text>
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Segundo ponto */}
        <View style={styles.item}>
          <View style={styles.circle} />
          <Text style={styles.label}>Carga carregada</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>16:21</Text>
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Terceiro ponto */}
        <View style={styles.item}>
          <View style={styles.circle} />
          <Text style={styles.label}>Sua carga saiu para entrega</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>17:12</Text>
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Quarto ponto */}
        <View style={styles.item}>
          <View style={styles.circle} />
          <Text style={styles.label}>Sua carga passou pelo Km. 114</Text>
          <Text style={styles.date}>Rod. Carvalho Pinto</Text>
          <Text style={styles.time}>15/03/2024 - 01:43</Text>
        </View>

        {/* Próximo item */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4caf50', // Verde
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#006064', // Azul
    marginBottom: 5,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: '#006064', // Azul
    marginHorizontal: 5,
  },
  label: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  date: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  time: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});

export default TrackingProgress;
