import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';

export default function M_Pagamento(){
    const navigation = useNavigation()

    const [expanded, setExpanded] = useState(false);
    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'M_Princ'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text 
            style={{color: '#10C18D', fontSize: 24,marginRight:'50%', marginTop:'3%', fontWeight:'500',}}
            >Pagamentos</Text>
        </View>
    {/*|
       |
       |
       |
       |
       |
       */}

        <View style = {styles.pagamentos}>
            
            <View style={{flexDirection: 'row', marginTop: '8%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color:'#0056FF', fontSize: 20, fontWeight: '600', marginRight: '2%'}}>Entregas concluídas</Text>        
                <Image className='w-8 h-8' source={require('../assets/images/true.png')}/>
            </View>

        <View style={styles.card} id='1'>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Entrega de Cimento</Text>
                <Text style={styles.cardDate}>17/05/2023</Text>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.boldText}> Paulo A.</Text>
                <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
            </View>
            <Text style={styles.locationText}>
                Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
            </Text>
            <View style={styles.cardFooter}>
                <TouchableOpacity> 
                <Text style={styles.paidText}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            {expanded && (
                <View style={styles.expandedContent}>
                    <Text>Data da entrega: 21/04/2023</Text>
                    <Text>Descrição completa: A entrega de terra foi realizada com sucesso, utilizando um caminhão basculante. Todo o material foi descarregado no local combinado e a operação foi concluída sem atrasos.</Text>
                    <Text>Contato para dúvidas: (11) 98765-4321</Text>
                </View>
            )}
            </TouchableOpacity>
        </View>
        <View style={styles.card} id='2'>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Entrega de Cimento</Text>
                <Text style={styles.cardDate}>17/05/2023</Text>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.boldText}> Paulo A.</Text>
                <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
            </View>
            <Text style={styles.locationText}>
                Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
            </Text>

            <View style={styles.cardFooter}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}> 
            <Text style={styles.paidText}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            {expanded && (
                <View style={styles.expandedContent}>
                    <Text>Data da entrega: 21/04/2023</Text>
                    <Text>Descrição completa: A entrega de terra foi realizada com sucesso, utilizando um caminhão basculante. Todo o material foi descarregado no local combinado e a operação foi concluída sem atrasos.</Text>
                    <Text>Contato para dúvidas: (11) 98765-4321</Text>
                </View>
            )}
            </TouchableOpacity>
        </View>

        <View style={styles.card} id='3'>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Entrega de Cimento</Text>
                <Text style={styles.cardDate}>17/05/2023</Text>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.boldText}> Paulo A.</Text>
                <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
            </View>
            <Text style={styles.locationText}>
                Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
            </Text>
            <View style={styles.cardFooter}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}> 
            <Text style={styles.paidText}>Ver mais</Text>
                </TouchableOpacity>
            </View>
            {expanded && (
                <View style={styles.expandedContent}>
                    <Text>Data da entrega: 21/04/2023</Text>
                    <Text>Descrição completa: A entrega de terra foi realizada com sucesso, utilizando um caminhão basculante. Todo o material foi descarregado no local combinado e a operação foi concluída sem atrasos.</Text>
                    <Text>Contato para dúvidas: (11) 98765-4321</Text>
                </View>
            )}
            </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>

)}   

const styles =  StyleSheet.create ({ 

pagamentos: {
    flex: 1,
    marginLeft: '4%',
    marginBottom:'6%',
},
card: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop:'5%',
    maxWidth:'96%',
    padding: 15,
    marginBottom: '5%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    color: '#163D89',
    marginLeft: 10,
    fontWeight:'500',
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paidText: {
    color: '#057856',
    fontWeight: 'bold',
    fontSize: 16
},
expandedContent:{
    marginTop: 10, 
},



ButtonPerfil:{
    backgroundColor:'#10C18D',
    marginVertical: '3%',
    marginLeft: '60%',
    marginTop:'20%',
    borderRadius: 40,
    height: 40,
    width: 110,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: 'center',
  }, 
  TxtButton:{
    fontSize: 17,
    fontWeight:'500',
    color:'#FFF',
  },
})
