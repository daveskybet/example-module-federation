import React from 'react';
import upcomingBookings from '../data/upcomingBookings.json';
import recentBookings from '../data/recentBookings.json';
import featuredServices from '../data/featuredServices.json';

const renderAppointment = ({item, key}: any) => (
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

const renderService = ({item, key}: any) => (
  <div key={key} style={styles.contentContainer}>
    <img src={`${item.image}?${key}`} style={styles.img}/>
    <div style={styles.textContainer}>
      <h2>
        {`${item.title} • ${item.place}`}
      </h2>
      <p>
        {`${item.address}`}
      </p>
    </div>
  </div>
);

const HomeScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          Featured Services
        </h1>
        <button style={styles.button}>
          See All
        </button>
      </div>
      <div style={styles.rowContainer}>
        {featuredServices.data.map((item, key) =>
          renderService({ item, key })
        )}
      </div>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          Upcoming Appointments
        </h1>
        <button style={styles.button}>
          See All
        </button>
      </div>
      <div style={styles.rowContainer}>
        {upcomingBookings.data.map((item, key) =>
          renderAppointment({ item, key })
        )}
      </div>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          Recent Appointments
        </h1>
        <button style={styles.button}>
          See All
        </button>
      </div>
      <div style={styles.rowContainer}>
        {recentBookings.data.map((item, key) =>
          renderAppointment({ item, key })
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
