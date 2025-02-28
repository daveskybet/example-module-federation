import React from 'react';
import {useAuth} from '../contexts/AuthContext';

const SignInScreen = () => {
  const {signIn} = useAuth();

  return (
    <div style={styles.container}>
      <h1 style={styles.welcomeHeadline}>
        Welcome!
      </h1>
      <p style={styles.welcomeText}>
        This is a dummy login screen. Just press the button and have a look
        around this super app 🚀
      </p>
      <button style={styles.button} onClick={signIn}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  welcomeHeadline: {
    fontSize: 28,
    color: '#4F378B',
  },
  welcomeText: {
    padding: 16,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#EADDFF',
    padding: 16,
    borderRadius: 16,
  },
};

export default SignInScreen;
