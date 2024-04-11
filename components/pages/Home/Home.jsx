import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Services from '../../../shared/Services'
import AuthContext from '../../../context/AuthContext'
import WelcomScreen from '../WelcomeScreen/WelcomScreen'
import SearchBar from '../Serachbar/SearchBar'
export default function Home() {

  const {userData,setUserData}=useContext(AuthContext)

  const handleLogout=()=>{
    
     Services.Logout();
     setUserData("")
  }
  return (
    <View style={{padding:20, backgroundColor:"#F4F5FA"}} >
        <WelcomScreen/>
        <SearchBar/>
    </View>
  )
}