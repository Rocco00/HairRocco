import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView} from "react-native";
class ClienteMioProfilo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nome:null,
            cognome:null,
            email:null,
            password:null,
            cellulare:null,
            shop:null,
            mostraPassword:true
        }
    }
    render (){
        return (
            <KeyboardAvoidingView behavior = "padding" enabled>
                <View style = {styles.centrale}>
                    <Text style = {styles.ovale1}>
                    MIO PROFILO 
                    </Text>
                </View>
                    <Text>
                        NOME
                    </Text>
                    <TextInput textContentType = "name" style = {styles.rettangoloRosso} onChangeText ={nome =>{
                                                                                                            this.setState({nome})}
                                                                                                        }/>
                    <Text>
                        COGNOME
                    </Text>
                    
                    <TextInput textContentType = "name" style = {styles.rettangoloBlu} onChangeText ={cognome =>{
                                                                                                            this.setState({cognome})}
                                                                                                        }/>
                    <Text>
                        E-MAIL
                    </Text>
                    <TextInput textContentType = "emailAddress" style = {styles.rettangoloRosso} onChangeText ={email =>{
                                                                                                            this.setState({email})}
                                                                                                        }/>
                    <Text>
                        PASSWORD
                    </Text>
                    <TextInput textContentType = "password" style = {styles.rettangoloBlu} secureTextEntry = {true} onChangeText ={password =>{
                                                                                                            this.setState({password})}
                                                                                                        }/>
                    <Text>
                        CELLULARE
                    </Text>
                    <TextInput textContentType = "telephoneNumber" style = {styles.rettangoloRosso} onChangeText ={cellulare =>{
                                                                                                            this.setState({cellulare})}
                                                                                                        }/>
                    <Text>
                        SHOP
                    </Text>
                    <TextInput textContentType = "none" style = {styles.rettangoloBlu} onChangeText ={shop =>{
                                                                                                            this.setState({shop})}
                                                                                                        }/>
                    <View style = {styles.centrale}>
                    <TouchableOpacity onPress={()=>{
                      const nome = this.state.nome
                      const cognome = this.state.cognome
                      const email = this.state.email
                      const password = this.state.password
                      const cellulare = this.state.cellulare
                      const shop = this.state.shop
                      if ( nome == null){
                          alert("NOME ERRATO")
                      }else if(cognome == null){
                          alert("COGNOME ERRATO")
                      }else if(email == null){
                          alert("EMAIL ERRATA")
                      }else if(password == null){
                          alert("PASSWORD ERRATA")
                      }else if(cellulare == null){
                          alert("CELLULARE ERRATO")
                      }else if(shop == null){
                          alert("SHOP NON ESISTE")
                      }else{
                          
                      }
                    }}>
                    <Text style = {styles.ovale1}>
                        SALVA
                    </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    ovale1:{
        width:230,
        height:40,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#808080",
        fontSize:25,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    rettangoloRosso:{
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:15,
        textAlign:"center",
        marginTop:5,
        marginBottom:5,
        padding:5,
    },
    rettangoloBlu:{
        borderWidth:1,
        borderColor:"#0000ff",
        fontSize:15,
        textAlign:"center",
        marginTop:5,
        marginBottom:5,
        padding:5,
    },
})
export default ClienteMioProfilo
