import React, {FC} from 'react';

type Props = {
  label: string;
  icon: string;
};

const Placeholder: FC<Props> = ({label}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>{label}</h1>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#4F378B',
  },
};

export default Placeholder;
