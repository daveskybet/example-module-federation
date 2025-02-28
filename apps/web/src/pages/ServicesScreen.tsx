import React, {useCallback} from 'react';
import { Link } from "react-router";
import services from '../data/services.json';

const ServicesScreen = () => {
  const renderItem = ({item, index}) => {
      return (
        <div key={index} style={styles.serviceItem}>
          <Link
            to={`/${item.id}`}
            style={styles.cardItem}>
            <img src={`${item.image}?${index}`} style={styles.img}/>
            <div style={styles.header}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </Link>
        </div>
      );
    };

  return (
    <div style={styles.contentContainer}>
      {services.data.map((item, index) =>
        renderItem({ item, index })
      )}
    </div>
  );
};

const styles = {
  contentContainer: {
    padding: 8,
  },
  serviceItem: {
    flex: 1,
    padding: 8,
    maxWidth: '50%',
    borderRadius: 16,
    backgroundColor: '#EADDFF',
  },
  cardItem: {
    color: '#333',
    textDecoration: 'none',
  },
  img: {
    width: '100%',
    borderRadius: 10,
  },
  header: {
    padding: 8,
  }
};

export default ServicesScreen;
