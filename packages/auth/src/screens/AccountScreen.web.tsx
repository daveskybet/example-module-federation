import React from 'react';
import {useAuth} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={signOut}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    backgroundColor: '#EADDFF',
    padding: 16,
    borderRadius: 16,
  },
};

export default AccountScreen;
