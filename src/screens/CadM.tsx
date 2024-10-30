import { ImageBackground, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, router } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Importando Firestore
import CheckBox from 'expo-checkbox';
import React from 'react';


export default function CadM(){
  const navigation = useNavigation()
  const db = getFirestore(); // Inicializa o Firestore
  const [selectedTrucks, setSelectedTrucks] = useState<string[]>([]); // Armazena os tipos de caminhões selecionados

  //CAMPOS DE CADASTRO
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userDate, setUserDate] = useState('');
    const [userCPF, setUserCPF] = useState('');
    const [userCNH, setUserCNH] = useState('');
    const [userPix, setUserPix] = useState('');
    const [userPlaca, setUserPlaca] = useState('');
    const [userModel, setUserModel] = useState('');
    const [userMarca, setUserMarca] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    //-----------------------------------------------------------------------------------
    const handleCheckBoxChange = (truckType: string) => {
    if (selectedTrucks.includes(truckType)) {
      // Se já estiver selecionado, remove o caminhão do array
      setSelectedTrucks(selectedTrucks.filter((item) => item !== truckType));
    } else {
      // Caso contrário, adiciona o caminhão ao array
      setSelectedTrucks([...selectedTrucks, truckType]);
    }
  };

    //-----------------------------------------------------------------------------------

    const handleDateInput = (text: string) => {
      let cleaned = text.replace(/[^0-9]/g, '');
      if (cleaned.length > 8) cleaned = cleaned.substring(0, 8);
      if (cleaned.length > 4) cleaned = cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
      else if (cleaned.length > 2) cleaned = cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setUserDate(cleaned);
        };
      
      const handleCpfInput = (text: string) => {
        let cleaned = text.replace(/[^0-9]/g, '');
        if (cleaned.length <= 11) {
          cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
        }
        else if (cleaned.length <= 14) {
          cleaned = cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
        }
        if (cleaned.length > 18) {
          cleaned = cleaned.substring(0, 18);
        }
        setUserCPF(cleaned);
      };

      const handleCnhInput = (text: string) => {
        let cleaned = text.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
        if (cleaned.length > 11) {
            cleaned = cleaned.substring(0, 11); // Limita a 11 dígitos
        }
        setUserCNH(cleaned);
    };
        
    
  //------------------------------------------------------------------------------------------

  const saveAdditionalUserData = async (uid: string, userType: string) => {
    try {
      await setDoc(doc(db, 'users', uid), {
        name: userName,
        dateOfBirth: userDate,
        cpf: userCPF,
        cnh: userCNH,
        email: userMail,
        pix: userPix,
        placa: userPlaca,
        modelo: userModel,
        marca: userMarca,
        selectedTrucks: selectedTrucks,
        userType: userType, 
        createdAt: new Date(),
      });
      console.log('Dados adicionais do usuário salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar os dados adicionais:', error);
    }
  };

//----------------------------------------------------

  function CadMotorista(){
    if(userName ==='' || userDate ==='' || userCPF ==='' || userCNH === '' || userPix === '' || userMail ==='' || userPass ==='' || userMarca === '' || userModel ==='' || userPlaca === ''){
      alert('Todos os campos devem ser preenchidos');
      return;
    } 
    else{
      const userType = 'motorista';
      createUserWithEmailAndPassword(auth, userMail, userPass)
      .then((useCredential) => {
        const user = useCredential.user;
        saveAdditionalUserData(user.uid, userType);
        alert('O usuário' + userMail + 'foi criado.');
        router.replace({name:'loging'} as never);
      })
      .catch((error) => {
        const errorMessage = error.message;
        //alert(errorMessage);
        //navigation.navigate('C_Princ' as never);
        alert('Falha na comunicação com o servidor, tente novamente!');
        console.log(errorMessage);
      });
    }
  };

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

      <ImageBackground
        source={require('../assets/images/bg-white.png')}
        style={styles.bkgd}>

        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
            onPress={ () => navigation.navigate({name: 'Cad'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
        </View>

            <View style={styles.txtcad}>
              <Text style = {styles.Text_1}> Cadastro </Text> 
              <Text style = {styles.Text_2}> Motorista </Text>
            </View>

            <View style={styles.CadMimputes}>
            <TextInput
                style={styles.inputCadM}
                placeholder='Nome completo'
                autoCorrect={false}//pro corretor não funcionar
                value={userName}
                onChangeText={setUserName}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='Data de Nascimento'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={userDate}
                onChangeText={handleDateInput}  // Formata a entrada do usuário
                maxLength={10}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='CPF'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={userCPF}
                onChangeText={handleCpfInput}  // Formata a entrada de CPF/CNPJ
                maxLength={14}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='CNH'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={userCNH}
                onChangeText={handleCnhInput}  // Formata a entrada do usuário
                maxLength={11}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                value={userMail}
                onChangeText={setUserMail}/>

                <View style={styles.inputesCADSenha}>
                    <TextInput
                      style={styles.inptCC}
                      placeholder='Senha'
                      secureTextEntry={!passwordVisible} // alterna entre visível ou não
                      autoCorrect={false}
                      value={userPass}
                      onChangeText={setUserPass}
                      className='ml-2'
                    />

                    {/* Botão para alternar visibilidade, dentro do campo */}
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} >
                      <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#B2B2B2' className='ml-1'/>
                    </TouchableOpacity>
                </View>
        </View>

            <View style={styles.txtPag}>
              <Text style = {styles.Pagamento}> Dados para receber o pagamento </Text> 
            </View>

              <View style={styles.Cad_imputes}>
            <TextInput
                style={styles.input_CadM}
                placeholder='Chave Pix'
                autoCorrect={false}//pro corretor não funcionar
                value={userPix}
                onChangeText={setUserPix}/>
            </View>

            <View style={styles.txt2}>
             <Text style={styles.texto2}>Insira os dados do veículo</Text>
            </View>
              <View style={styles.CadMimputes2}>
              <TextInput
                style={styles.inputCadM2}
                placeholder="Placa do caminhão"
                autoCorrect={false}                
                value={userPlaca}
                onChangeText={setUserPlaca}
                maxLength={7}
              />
              
              <TextInput
                style={styles.inputCadM2}
                placeholder="Modelo"
                autoCorrect={false}
                value={userModel}
                onChangeText={setUserModel}
              />

              <TextInput
                style={styles.inputCadM2}
                placeholder="Marca"
                autoCorrect={false}
                value={userMarca}
                onChangeText={setUserMarca}
              />
              </View>


              <View style={styles.CadMimputes2}> 
                <View style={{marginTop:'23%'}}/>
              <View style={styles.txtt2}>
                <Text style={styles.text2}>Qual o tipo do seu caminhão:</Text>
              </View>



              <View style={styles.containerpai}>

                <View style={styles.container2}>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('VUC')}
                      onValueChange={() => handleCheckBoxChange('VUC')}/>
                    <Text>VUC</Text>
                  </View>

                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Carreta')}
                      onValueChange={() => handleCheckBoxChange('Carreta')}
                    />
                    <Text>Carreta</Text>
                  </View>

                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('SemiPesado')}
                      onValueChange={() => handleCheckBoxChange('SemiPesado')}
                    />
                    <Text>Semi-pesado</Text>
                  </View>

                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Bitrem')}
                      onValueChange={() => handleCheckBoxChange('Bitrem')}
                    />
                    <Text>Bitrem</Text>
                  </View>

                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Pesado')}
                      onValueChange={() => handleCheckBoxChange('Pesado')}
                    />
                    <Text>Pesado</Text>
                  </View>
                </View>

                <View style={styles.container22}>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Tanque')}
                      onValueChange={() => handleCheckBoxChange('Tanque')}
                    />
                    <Text>Tanque</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Basculante')}
                      onValueChange={() => handleCheckBoxChange('Basculante')}
                    />
                    <Text>Basculante</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Rodotrem')}
                      onValueChange={() => handleCheckBoxChange('Rodotrem')}
                    />
                    <Text>Rodotrem</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Tritrem')}
                      onValueChange={() => handleCheckBoxChange('Tritrem')}
                    />
                    <Text>Tritrem</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Carro')}
                      onValueChange={() => handleCheckBoxChange('Carro')}
                    />
                    <Text>Carro</Text>
                  </View>
                </View>
              </View>

              </View>
              <View style={styles.ProximoBtn}>
                    <TouchableOpacity
                        style={styles.BtnProx}
                        activeOpacity={0.6}
                        onPress={CadMotorista}>
                        <Text style={styles.BtnProxTxt}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
              
            </ImageBackground>
            </ScrollView>
            </KeyboardAvoidingView>

)}