import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  label: string;
  icon: string;
};

const Placeholder: FC<Props> = ({label, icon}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon size={96} color={'#4F378B'} name={icon} />
      <Text style={styles.text}>{label}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#4F378B',
  },
});

export default Placeholder;
