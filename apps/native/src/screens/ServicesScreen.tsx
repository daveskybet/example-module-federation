import React, {useCallback} from 'react';
import {
  Alert,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainNavigator';
import {Card, Paragraph, Title} from 'react-native-paper';
import services from '../data/services.json';
import {ServicesStackParamList} from '../navigation/ServicesNavigator';

type ServiceScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ServicesStackParamList, 'Services'>,
  NativeStackScreenProps<MainStackParamList>
>;

type ServiceMenuItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const ServicesScreen = ({navigation}: ServiceScreenProps) => {
  const openBooking = useCallback(
    () => navigation.navigate('Booking'),
    [navigation],
  );

  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<ServiceMenuItem>) => {
      const lastItem = index === services.data.length - 1;
      const map = new Map([
        ['booking', openBooking],
      ]);

      const onPress =
        map.get(item.id) ?? (() => Alert.alert('Not implemented yet'));

      return (
        <View style={[styles.serviceItem, lastItem && styles.lastServiceItem]}>
          <Card
            mode="contained"
            onPress={onPress}
            style={styles.cardItem}>
            <Card.Cover source={{uri: `${item.image}?${index}`}} />
            <Card.Content>
              <Title numberOfLines={1}>{item.title}</Title>
              <Paragraph numberOfLines={1}>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      );
    },
    [openBooking],
  );

  return (
    <FlatList
      numColumns={2}
      data={services.data}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 8,
  },
  serviceItem: {
    flex: 1,
    padding: 8,
    maxWidth: '100%',
  },
  lastServiceItem: {
    maxWidth: '50%',
  },
  cardItem: {
    flex: 1,
  },
  disabled: {
    opacity: 0.4,
  },
});

export default ServicesScreen;
