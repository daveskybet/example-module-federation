import React from 'react';
import { Link } from "react-router";
import upcomingBookings from '../data/upcomingBookings.json';

const renderUpcoming = ({item, key}: any) => (
  <div key={key} style={styles.contentContainer}>
    <div style={styles.textContainer}>
      <h2>
        {`${item.title} • ${item.provider}`}
      </h2>
      <p>
        {`${item.date} • ${item.time}`}
      </p>
    </div>
    <div style={styles.textContainer}>
      <button style={styles.button} onClick={() => {}}>
        Cancel
      </button>
      <button style={styles.buttonDark} onClick={() => {}}>
        Reschedule
      </button>
    </div>
  </div>
);

const HomeScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          Upcoming Appointments
        </h1>
        <Link
          to="/upcoming"
          style={styles.button}>
          See All
        </Link>
      </div>
      <div style={styles.rowContainer}>
        {upcomingBookings.data.map((item, key) =>
          renderUpcoming({ item, key })
        )}
      </div>
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
  rowContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    overflow: 'scroll',
    margin: 16,
    gap: 16,
  },
  contentContainer: {
    borderRadius: 16,
    backgroundColor: '#EADDFF',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    flexBasis: '25vw',
  },
  textContainer: {
    padding: 16,
  },
  header: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    borderRadius: 10,
  },
};

export default HomeScreen;
