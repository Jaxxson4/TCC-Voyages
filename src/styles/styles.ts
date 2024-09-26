import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Button: {
    },
//------------------------------HOME-----------------------------
    btn1:{
        backgroundColor: '#1F9C69',
        height: '14%',
        width:'48%',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: '-10%',
        borderRadius: 100,
        marginBottom:'8%',
    },

    btn1Text:{
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 40,
        paddingRight: 40,
    },

    btn2:{
        backgroundColor: '#1F9C69',
        height: '14%',
        width:'50%',
        justifyContent: "center",
        alignItems: 'center',
        marginTop:'10%',
        borderRadius: 100,
        marginBottom:'8%',
        paddingHorizontal: 24,
        },

    bkgd:{
        flex: 1,
    },

//------------------------------LOGIN-----------------------------------
    container:{
        flex: 1,
        marginLeft: '16%',
        marginTop: '5%',
        marginBottom:'6%',
    },
    Texth1:{
        color:'#10C18D',
        marginTop: '20%',
        fontSize: 33,
        fontWeight: '700',
    },
    Texth2:{
        fontSize: 20,
        color: '#163D89',
        fontWeight:'600',
    },

    inputes:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        width:'70%',
        height:'80%',
        marginLeft: '15%',
        marginTop: '-80%',
    },

    input:{
        backgroundColor:'#E1E1E1',
        width:'100%',
        marginBottom: 15,
        color: '#222',
        fontSize: 15,
        borderRadius: 13,
        padding: 10,
        marginTop: '8%',
    },

    BtnEntrar:{
        backgroundColor: '#10C18D',
        height: '22%',
        justifyContent: "center",
        alignItems: 'center',
        marginTop:'20%',
        borderRadius: 100,
        marginBottom:'8%',
    },

    BtnEntrarTxt:{
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 40,
        paddingRight: 40,
    },

//-----------------------CADASTRO CHOICE------------------------
    Cadwelcome:{
        justifyContent: 'center',
        textAlign:'center',
        marginLeft:'15%',
    },

    cadwelco:{
        color:'#10C18D',
        fontSize: 30,
        fontWeight: '700',
        marginTop:'10%',
    },

    txtwelcome:{
        color:'#163D89',
        fontSize: 20,
        fontWeight: '500',
    },

    Cadwelcome2:{
        justifyContent: 'center',
        textAlign:'center',
        marginLeft:'15%',
        marginTop:'15%',
        marginBottom: '140%',
    },

    mood:{
        flexDirection:'row',
        gap: 8,
        marginTop: '5%',
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'8%',
        marginLeft:'-20%',
    },
    outter:{
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inner:{
        width: 18,
        height: 18,
        backgroundColor: '#475c86',
        borderRadius: 10,
    },
    Usuario:{
        fontSize: 18,
        textTransform: 'capitalize',
        color:'#163D89',
        fontWeight: '400',
    },

    viewContinuar:{
      marginTop:'70%',  
    },
    buttonContinuar:{
        marginLeft:'45%',
        marginRight:'14%',
        marginTop:'30%',
        backgroundColor: '#10C18D',
        borderRadius: 100,
        justifyContent:'center',
    },
    txtContinuar:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
    },
//------------------CADASTRO CONTRATANTE------------------------
    txtcad :{
        justifyContent: "center",
        flexDirection: 'row',
        gap: 10,
    },
    txtCadcont:{
        color:'#057856',
        marginTop: '20%',
        fontSize: 30,
        fontWeight: '700',
    },
    txtcont:{
        color:'#10C18D',
        marginTop: '20%',
        fontSize: 30,
        fontWeight: '500',
    },
    inputesCAD:{
        marginTop:'15%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width:'70%',
        height:'80%',
        marginLeft: '15%',
    },
    inptCC:{
        backgroundColor:'#E1E1E1',
        width:'100%',
        marginBottom: 15,
        color: '#222',
        fontSize: 15,
        borderRadius: 13,
        padding: 10,
        marginTop: '8%',
    },
    ConfirmBtn:{
        margin:'30%',
        backgroundColor: '#10C18D',
        borderRadius: 100,
        justifyContent:'center',
    },
    Confirmtxt:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
    },

//------------------------CADASTRO MOTORISTA 1---------------------------
Text_1: {
    color: '#057856',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '700',
},
Text_2: {
    color: '#10C18D',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '500',
},
CadMimputes: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'70%',
    height:'80%',
    marginLeft: '15%',
},
inputCadM: {
    backgroundColor:'#E1E1E1',
    width:'100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    borderRadius: 13,
    padding: 10,
    marginTop: '8%',
},
txt_cad: {
    flex: 1,
    marginLeft: '16%',
    marginTop: '30%',
    marginBottom:'6%',
},
Texto_1: {
    color: '#000',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 21,
    fontWeight: '500',
},

Texto_2: {
    color: '#163D89',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 21,
    fontWeight: '500',
},

texto: {
    color: '#163D89',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 20,
    fontWeight: '300',
},
txtPag: {
    
},
Pagamento:{
    color: '#163D89',
    textAlign: 'center',
    marginTop: '10%',
    fontSize: 20,
    fontWeight: '500',
},
Cad_imputes: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'70%',
    height:'80%',
    marginLeft: '15%',
},
input_CadM: {
    backgroundColor:'#E1E1E1',
    width:'100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    borderRadius: 13,
    padding: 10,
    marginTop: '3%',
},
ProximoBtn:{
    marginRight:'-15%',
    marginLeft:'15%',
    marginTop:'-10%',
},
BtnProx: {
    backgroundColor: '#10C18D',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'30%',
    borderRadius: 50,
},
BtnProxTxt:{
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    padding: 8,
},

//------------------CADASTRO MOTORISTA 2 ------------------------
txtcad2: {
    flex: 1,
    marginLeft: '16%',
    flexDirection:'row',
    gap: 10,
},
Text_cad1: {
    color: '#057856',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '700',
},
Text_cad2: {
    color: '#10C18D',
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '500',
},
CadMimputes2: { 
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'70%',
    height:'80%',
    marginLeft: '15%',
    marginTop:'-20%',
},
inputCadM2: {
    backgroundColor:'#E1E1E1',
    width:'100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 14,
    borderRadius: 13,
    padding: 10,
    marginTop: '8%',
},
txt2: {
    marginTop:'10%',
},
texto2: {
    color:'#113164',
    textAlign: 'center',
    marginTop: '7%',
    marginBottom:'20%',
    fontSize: 25,
    fontWeight: '500',
},
txtt2: {


},
text2: {
    color: '#10C18D',
    marginTop: '20%',
    fontSize: 21,
    fontWeight: '600',
},
BtnsDad: {
    flexDirection:'row',
    gap: 70,
    marginLeft:'8%',
},
BtnConfirmar: {
    backgroundColor: '#10C18D',
    height:'18%',
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    marginTop:'20%',
    borderRadius: 50,
    marginBottom:'22%',

},
BtnConfirmarTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
},
BtnPagAnterior: {
    backgroundColor: '#113164',
    height:'18%',
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    marginTop:'20%',
    borderRadius: 50,
    marginBottom:'8%',
},
BtnAnteriorTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
},
containerpai: {
    flexDirection: 'row',
    gap: 3,
},
container2: {
    marginLeft:'10%',
},
row: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    marginTop:'30%',
},
container22: {
    justifyContent: 'flex-start',
    flexDirection:'column',
    marginLeft: '30%',
},
column: {
    justifyContent: 'flex-start',
    flexDirection:'row',
    marginLeft:'10%',
    marginTop:'30%',
},
checkbox: {
    marginRight: '5%',
},

})