import { ImageBackground, KeyboardAvoidingView, StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Importando Firestore

export default function CadC(){
  const navigation = useNavigation();
  const db = getFirestore(); // Inicializa o Firestore

  // CAMPOS DE CADASTRO
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userCPF_Cnpj, setUserCPF_Cnpj] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Função para salvar dados adicionais no Firestore
  const saveAdditionalUserData = async (uid: string, userType: string) => {
    try {
      await setDoc(doc(db, 'users', uid), {
        name: userName,
        dateOfBirth: userDate,
        cpfCnpj: userCPF_Cnpj,
        email: userMail,
        userType: userType, 
        createdAt: new Date(),
      });
      console.log('Dados adicionais do usuário salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar os dados adicionais:', error);
    }
  };

  function CadC(){
    if (userName === '' || userDate === '' || userCPF_Cnpj === '' || userMail === '' || userPass === '') {
      alert('Todos os campos devem ser preenchidos');
      return;
    } else {
      const userType = 'contratante'; // ou 'contratante' dependendo da tela
      createUserWithEmailAndPassword(auth, userMail, userPass)
        .then((userCredential) => {
          const user = userCredential.user;
          saveAdditionalUserData(user.uid, userType);
          alert('O usuário ' + userMail + ' foi criado.');
          navigation.navigate('loging' as never);
        })
        .catch((error) => {
          const errorMessage = error.message;
          //alert(errorMessage);
          //navigation.navigate('C_Princ' as never);
          alert('Falha na comunicação com o servidor, tente novamente!');
          console.log(errorMessage);
        });
      }
    }

  const handleDateInput = (text: string) => {
    // Remove caracteres que não sejam números e formata a data
    let cleaned = text.replace(/[^0-9]/g, '');
    if (cleaned.length > 8) cleaned = cleaned.substring(0, 8);
    if (cleaned.length > 4) cleaned = cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    else if (cleaned.length > 2) cleaned = cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    setUserDate(cleaned);
  };

  const handleCpfCnpjInput = (text: string) => {
    // Remove caracteres que não sejam números e formata CPF/CNPJ
    let cleaned = text.replace(/[^0-9]/g, '');
    if (cleaned.length <= 11) cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    else if (cleaned.length <= 14) cleaned = cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
    if (cleaned.length > 18) cleaned = cleaned.substring(0, 18);
    setUserCPF_Cnpj(cleaned);
  };

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
      style={{ flex: 1 }}>

      <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false}>
        <ImageBackground source={require('../assets/images/bg-white.png')} style={styles.bkgd}>
          <View className="bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center" onPress={() => navigation.navigate('Cad' as never)}>
              <Image source={require("../assets/images/arrow-back.png")} className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.txtcad}>
              <Text style={styles.txtCadcont}>Cadastro</Text>
              <Text style={styles.txtcont}>Contratante</Text>
            </View>

            <View style={styles.inputesCAD}>
              <TextInput style={styles.inptCC} placeholder='Nome completo' autoCorrect={false} value={userName} onChangeText={setUserName}/>
              <TextInput style={styles.inptCC} placeholder='Data de nascimento' autoCorrect={false} keyboardType='numeric' value={userDate} onChangeText={handleDateInput} maxLength={10} />
              <TextInput style={styles.inptCC} placeholder='CPF/CNPJ' autoCorrect={false} keyboardType='numeric' value={userCPF_Cnpj} onChangeText={handleCpfCnpjInput} maxLength={18} />
              <TextInput style={styles.inptCC} placeholder='Email' autoCorrect={false} value={userMail} onChangeText={setUserMail}/>
              
              <View style={styles.inputesCADSenha}>
                <TextInput style={styles.inptCC} placeholder='Senha' secureTextEntry={!passwordVisible} autoCorrect={false} value={userPass} onChangeText={setUserPass} />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} >
                  <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#B2B2B2'/>
                </TouchableOpacity>
              </View>
            </View> 

            <TouchableOpacity onPress={CadC} style={styles.ConfirmBtn} activeOpacity={0.6}>
              <Text style={styles.Confirmtxt}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
