import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather style={{marginRight:10}} name="search" size={24} color="gray" />
      <TextInput  placeholder='Search...'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#fff",
        padding:10,
        elevation:400,
        borderRadius:20,
        marginTop:10,
        alignItems:"center"
    
    }
})