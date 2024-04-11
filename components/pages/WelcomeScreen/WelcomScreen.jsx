import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import profileIcon from "../../../assets/images/profileIcon/user.png"
import AuthContext from '../../../context/AuthContext'
export default function WelcomScreen() {
    const { userData, setUserData } = useContext(AuthContext)

    return (
        <View style={styles.containner}>
            <View>
                <Text>Hello,</Text>
                <Text>{userData?.name ? { name }:<Text style={{fontWeight:800}}>Manish Kumar</Text>} </Text>
            </View>
            <Image style={{ width: 40, height: 40 }} source={profileIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    containner:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          
    }
})