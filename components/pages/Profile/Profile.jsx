import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles.container}>
      {/* Drawer content */}
      {drawerOpen && (
        <View style={styles.drawer}>
          <TouchableOpacity onPress={toggleDrawer} style={styles.drawerCloseButton}>
            <Text style={styles.drawerCloseButtonText}>Close Drawer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Home Pressed')} style={styles.drawerItem}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Profile Pressed')} style={styles.drawerItem}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('About Pressed')} style={styles.drawerItem}>
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Logout Pressed')} style={styles.drawerItem}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Hamburger button */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburgerButton}>
        <Ionicons name={drawerOpen ? 'close' : 'menu'} size={30} color="#000" />
      </TouchableOpacity>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    backgroundColor: '#fff',
    width: 200,
    paddingTop: 40,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    elevation: 10,
  },
  drawerItem: {
    paddingVertical: 10,
  },
  drawerCloseButton: {
    marginBottom: 20,
  },
  drawerCloseButtonText: {
    color: 'blue',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
