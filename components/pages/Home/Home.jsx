import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Services from '../../../shared/Services'
import AuthContext from '../../../context/AuthContext'
export default function Home() {

  const {userData,setUserData}=useContext(AuthContext)

  const handleLogout=()=>{
    
     Services.Logout();
     setUserData("")
  }
  return (
    <View style={{flex:1}} >
      <Text >Home is here</Text>
      <TouchableOpacity style={{backgroundColor:"red", padding:10,width:100}} onPress={()=>handleLogout()} >  
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}