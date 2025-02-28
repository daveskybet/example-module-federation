import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={signOut}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#EADDFF',
    padding: 16,
    borderRadius: 16,
  },
});

export default AccountScreen;
