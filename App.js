
import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import AuthContext from './context/AuthContext';
import Login from './components/pages/loginpage/Login';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';

export default function App() {
  const [userData, setUserData] = useState(null); 
  console.log("userData===>",userData)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AuthContext.Provider value={{ userData, setUserData }}>

        {userData ? <Home /> : <Login />}
        {/* <Login/> */}
        {/* <Profile/> */}
      </AuthContext.Provider>
    </SafeAreaView>
  );
}
