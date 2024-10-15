import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Animated, Dimensions, Alert, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { stylesContrat } from '../styles/stylesContrat';
import { useNavigation } from 'expo-router';
import React, { useState, useRef } from 'react';
  
const { width } = Dimensions.get('window');

export default function C_Princ(){
  const navigation = useNavigation()

  const handleChatPress = () => {
    Alert.alert('Ainda em desenvolvimento 😁');
  }

  const [menuVisible, setMenuVisible] = useState(false);  // Controla a visibilidade do menu
  const slideAnim = useRef(new Animated.Value(-width * 0.8)).current; // Posição inicial do menu fora da tela

  // Função para abrir o menu
  const openMenu = () => {
    setMenuVisible(true);  // Define que o menu está visível
    Animated.timing(slideAnim, {
      toValue: 0,  // Move o menu para a posição 0 (visível)
      duration: 300,  // Duração da animação
      useNativeDriver: true,  // Usa a animação no thread nativo
    }).start();
  };

  // Função para fechar o menu
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.7,  // Move o menu para fora da tela, ajustado para 80% da largura
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

          
          <View className=" bg-blue-III h-32 mb shadow-slate-300 items-center justify-between flex flex-row">
            <View>
              <TouchableOpacity className="w-20 h-16 ml-5 rounded-full flex justify-center items-center" 
                                style={{marginLeft: '25%', marginRight: '-20%'}}
                                onPress={menuVisible ? closeMenu : openMenu}>
                  <Ionicons name="menu" size={33} style={{ color: 'white' }}></Ionicons>
              </TouchableOpacity>

              {menuVisible && (
                <>
                 <TouchableOpacity style={styles.overlay} onPress={closeMenu} />
              <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                <Text style={styles.menuTitle}>VOYAGES</Text>
                
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Buscar Motoristas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Divulgar Entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Histórico de Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Conversas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Configuração</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeMenu}>
                  <Text style={styles.menuItem}>Sair</Text>
                </TouchableOpacity>
              </Animated.View>
              </>
            )}
            </View>

            <View><Text style={{fontSize:25}} className='font-bold text-green'> VOYAGES </Text></View>

            <TouchableOpacity className="ml-5 w-20 h-14 rounded-full flex justify-center items-center " style={{marginRight: '5%'}}>
                <Feather name="bell" size={30} style={{ color: 'white' }}></Feather>
            </TouchableOpacity>
        </View>

        <View style={styles.ButtonsOptions}>
              <View style={styles.btn}>
              <TouchableOpacity style={styles.Button}
              onPress={handleChatPress}>
                <Image className='w-9 h-9' source={require('../assets/images/conversas.png')}/>
              </TouchableOpacity>
              <Text style={styles.txtbuttons}>Chat</Text>
              </View>
          

              <View style={styles.btn}>
                <TouchableOpacity style={styles.Button}
                onPress={ () => navigation.navigate({name: 'CargasD'} as never)}>
                <Image className='w-10 h-10' source={require('../assets/images/caminhao-de-entrega.png')}/>
                </TouchableOpacity>
                <Text style={styles.txtbuttons}>Cargas</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity style={styles.Button}
                onPress={ () => navigation.navigate({name: 'Pagamento'} as never)}>
                <Image className='w-9 h-9' source={require('../assets/images/pagamento.png')}/>
                </TouchableOpacity>
                <Text style={styles.txtbuttons}>Pagamentos</Text>
              </View>
          </View>
          <View style={styles.LineDivisoria} />


    <View style={styles.container}>
      <Text style={styles.header}>Acompanhamento da entrega</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.progressContainer}
      >
        {/* Primeiro ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Pedido feito</Text>
          <Text style={styles.date}>12/03/2024</Text>
          <Image source={require('../assets/images/verdadeiro.png')} style={styles.imageButton} />
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Segundo ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Carga carregada</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>16:21</Text>
          <Image source={require('../assets/images/verdadeiro.png')} style={styles.imageButton} />
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Terceiro ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Sua carga saiu para entrega</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>17:12</Text>
          <Image source={require('../assets/images/verdadeiro.png')} style={styles.imageButton} />
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Quarto ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Sua carga passou pelo Km. 114</Text>
          <Text style={styles.date}>Rod. Carvalho Pinto</Text>
          <Text style={styles.time}>15/03/2024 - 01:43</Text>
          <Image source={require('../assets/images/verdadeiro.png')} style={styles.imageButton} />
        </View>

      </ScrollView>



        <View style={styles.LineDivisoria} />

        <View style={stylesContrat.Cards}>
            <View style={stylesContrat.CardBuscar}>

                <TouchableOpacity style={stylesContrat.BuscarM} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Motoristas'} as never)}>

                    <Text style={stylesContrat.BuscarTxt}>Buscar motoristas</Text>

                    <Image  source={require('../assets/images/Caminh_1.png')} 
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck1} />
                </TouchableOpacity>
            </View>



            <View style={stylesContrat.CardDivulgar}>

                <TouchableOpacity style={stylesContrat.Divulgar} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Divulgação'} as never)}>

                    <Text style={stylesContrat.DivulgarTxt}>Divulgar carga</Text>

                    <Image  source={require('../assets/images/Caminh_2.png')}
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck2} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.LineDivisoria} />
        
        <View>
          <Text className='mt-8' style={styles.header} >Cargas já entregues</Text>
        </View>

      <View style={{justifyContent:'center', marginLeft: 19}}>
             {/* Primeiro cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Terra</Text>
            <Text style={styles.cardDate}>21/04/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
            <Text style={styles.boldText}> Felipe Braga</Text>
            <Text style={styles.infoText}> Caminhão Basculante</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua João Alves, nº 334, Pinheiros, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          
          </View>
        </View>

        {/* Segundo cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Cimento</Text>
            <Text style={styles.cardDate}>17/05/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
      
            <Text style={styles.boldText}> Paulo A.</Text>
            <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          </View>
        </View>
      </View>
    </View>
</ScrollView>
</KeyboardAvoidingView>
)}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    header: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 20,
      marginLeft:'3%',
      color: '#10C18D', // Verde
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuButton: {
      padding: 20,
      backgroundColor: '#003366',
      position: 'absolute',
      zIndex: 10,
    },
    menuTitle: {
      fontSize: 22,
      color: '#00cc66',
      marginBottom: 30,
    },
    menuText: {
      fontSize: 25,
      color: '#000',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',  // Fundo semitransparente
      zIndex: 9,
    },
    menu: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '70%',  // Ajustado para 80% da largura da tela
      height: '100%',
      backgroundColor: '#003366',
      paddingTop: 50,
      paddingLeft: 20,
      zIndex: 10,  // Garante que o menu sobreponha tudo
    },
    menuItem: {
      fontSize: 18,
      color: '#000',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      paddingBottom: 10,
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },


    item: {
      backgroundColor: '#EBEBEB',
      padding: 12,
      width:'20%',
      marginVertical: '3%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },
    imageButton: {
      width: 30, // Ajuste o tamanho da imagem conforme necessário
      height: 30,
      marginBottom: 8,
      marginTop:'10%',
    },
    line: {
      width: 40,
      height: 2,
      backgroundColor: '#113164', // Azul
      marginHorizontal: 5,
    },
    LineDivisoria:{
        marginTop: '8%',
        width: '100%',
        height: 2,
        backgroundColor: '#E1E1E1', // Azul
        marginHorizontal: 5,
    },
    label: {
      fontSize: 13,
      fontWeight:'500',
      color: '#113164',
      textAlign: 'center',
    },
    date: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    time: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    icon: {
      marginLeft: 10,
    },


    card: {
      backgroundColor: '#E1E1E1',
      borderRadius: 10,
      marginTop:'5%',
      maxWidth:'96%',
      padding: 15,
      marginBottom: '10%',
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
      marginLeft: 5,
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
      color: '#10C18D',
      fontWeight: 'bold',
    },

    ButtonsOptions: {
      marginTop:'5%',
      marginBottom:'-5%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap: 45,
    },
    Button: {
      backgroundColor:'#E0E0E0',
      alignItems:'center',
      padding: 13,
      borderRadius: 100,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },
    btn: {
      display:'flex',
      alignItems:'center',
    },
    txtbuttons: {
      fontSize: 15,
      fontWeight: '500',
      marginTop:'10%',
      color:'#10C18D',
    },
  });