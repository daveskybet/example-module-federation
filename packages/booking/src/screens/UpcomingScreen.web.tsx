import React from 'react';
import upcomingBookings from '../data/upcomingBookings.json';

const renderItem = ({item, key}: any) => (
  <div key={key} style={styles.contentContainer}>
    <div>
      <h2>
        {`${item.title} • ${item.provider}`}
      </h2>
      <p>
        {`${item.date} • ${item.time}`}
      </p>
    </div>
    <div>
      <button style={styles.button} onClick={() => {}}>
        Cancel
      </button>
      <button style={styles.buttonDark} onClick={() => {}}>
        Reschedule
      </button>
    </div>
  </div>
);

const UpcomingScreen = () => {
  return (
    <div
      style={styles.container}
    >
    {upcomingBookings.data.map((item, key) =>
      renderItem({ item, key })
      )}
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#EADDFF',
    color: '#6750A4',
    padding: 16,
    borderRadius: 16,
    textDecoration: 'none',
  },
  buttonDark: {
    backgroundColor: '#6750A4',
    color: '#fff',
    padding: 16,
    borderRadius: 16,
    textDecoration: 'none',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#EADDFF',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default UpcomingScreen;
