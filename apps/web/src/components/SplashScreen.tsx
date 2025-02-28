import React from 'react';

const SplashScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        Host application is loading. Please wait...
      </h1>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 24,
    color: '#4F378B',
    textAlign: 'center',
  },
  progress: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
};

export default SplashScreen;
