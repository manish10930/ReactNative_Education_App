import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import img1 from "../../../assets/images/login/image 13.png"
import img2 from "../../../assets/images/login/Google.png"
import Colors from '../../../shared/Colors'
import AuthContext from '../../../context/AuthContext'
import Services from '../../../shared/Services'

export default function Login() {
  const {userData,setUserData}=useContext(AuthContext)
  // setUserData("token");
  // Services.setUserAuth("token");
  // Services.getUserAuth();
  useEffect(()=>{

  setUserData("token")

  },[])
  console.log("userData==>",userData)
  return (
    <View>
      <Image source={img1} />
      <View style={styles.containner}>
        <Text style={styles.welcomeText} >Welcome to Education App</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 30 }}>Login/SignUp</Text>
        <View>
          <Text style={styles.button}> <Image source={img2} /> Signin With Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containner: {
    marginTop: -20,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  welcomeText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20
  },
  button: {

    backgroundColor: Colors.primary,
    margin:30,
    padding:10,
    display:"flex",
    textAlign:"center",
    alignItems:"center",
    color:"#fff",
    fontWeight:"bold",
    paddingBottom:25,
    borderRadius:20

  }
})

