import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserAuth = async (data) => {
  try {
    await AsyncStorage.setItem('userdata', data);
  } catch (e) {
    // saving error
  }
};

const getUserAuth = async () => {
  try {
    const value = await AsyncStorage.getItem('userdata');
    if (value !== null) {
      // value previously stored
      console.log("value-->", value);
    }
  } catch (e) {
    // error reading value
  }
};

const Logout=()=>{
    AsyncStorage.clear()
    console.log("logout is successful...")
}

export default {
  getUserAuth,
  setUserAuth,
  Logout
};
