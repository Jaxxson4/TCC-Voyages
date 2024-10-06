import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform, ViewBase } from 'react-native';
import { useNavigation } from 'expo-router';
import React from 'react';

export default function Trajetos(){
    const navigation = useNavigation()

return(
    <KeyboardAvoidingView  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
    style={{ flex: 1 }}>

    <ScrollView style={{flex: 1}}
    showsHorizontalScrollIndicator={false}>

    <View className= " bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
        <TouchableOpacity className= "w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center"
        onPress={ () => navigation.navigate({name: 'Motoristas'} as never)}>

        <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/arrow-back.png")} />
        </TouchableOpacity>
        <Text style={{color: '#10C18D', fontSize: 21, marginLeft:'2%', marginTop:'3%', fontWeight:'500',}}
              className='mr-52'>Atualizar trajeto</Text>
    </View>

        <View style={styles.atualizar}>
            <View style={styles.ContAtualização}>
                <View style={{marginRight:'3%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.date}>xx/xx/xx</Text>
                    <Text style={styles.time}>xx:xx</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.bola}/>
                    <Text style={styles.txtAtualização}>Serviço iniciado</Text>
                </View>
            </View>
            <View style={{height: 2, width: 100, backgroundColor: 'grey', transform:[{rotate: '90deg'}], marginTop:'6%', marginLeft:'9%'}}/>
        </View>
        <View style={styles.atualizar}>
            <View style={styles.ContAtualização}>
                <View style={{marginRight:'3%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.date}>xx/xx/xx</Text>
                    <Text style={styles.time}>xx:xx</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.bola}/>
                    <Text style={styles.txtAtualização}>xxxxx</Text>
                </View>
            </View>
            <View style={{height: 2, width: 100, backgroundColor: 'grey', transform:[{rotate: '90deg'}], marginTop:'6%', marginLeft:'9%'}}/>
        </View>

        <View style={{flexDirection: 'row',flex: 1, marginLeft: '26.6%', marginTop: '8%',}}>
            <View style={{ height: 15,
                            width: 15,
                            backgroundColor: '#0056FF',
                            borderRadius: 10,
                            marginTop: '3%',
                            marginRight: '7 %',}}/>
            <View>
                <View>
                    <Text style={styles.Newtrajeto}>Novo trajeto</Text>
                    <TextInput
                    style={styles.imput}
                    placeholder='Localização atual'
                    autoCorrect={false}//pro corretor não funcionar
                    onChangeText={() => {}}/>
                </View>
            </View>
        </View>


    </ScrollView>
    </KeyboardAvoidingView>
)
}
const styles = StyleSheet.create({
    atualizar:{
        flex: 1,
        marginLeft: '8%',
        marginTop: '8%',
    },
    ContAtualização:{
        flexDirection: 'row',
    },
    date:{
        fontSize: 17,
        color: 'grey',
    },
    time:{
        fontSize: 16,
        color: '#163D89',
        fontWeight: '700',
    },
    bola:{
        height: 15,
        width: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        marginTop: '3%',
        marginRight: '7 %',
    },
    txtAtualização:{
        fontSize: 18,
        color: 'grey',
    },
    Newtrajeto:{
        color: '#0056FF',
        fontSize: 18,
        fontWeight: '600',
    },
    imput:{
        alignItems:'center',
        backgroundColor:'#E1E1E1',
        width: 190,
        color: '#222',
        fontSize: 15,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 8,
        marginTop: '8%',
    },
})