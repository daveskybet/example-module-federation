import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeBottomTabScreenProps} from '@bottom-tabs/react-navigation';
import {
  Avatar,
  Card,
  Button,
  Divider,
  Text,
} from 'react-native-paper';
import {TabsParamList} from '../navigation/TabsNavigator';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import upcomingBookings from '../data/upcomingBookings.json';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  NativeBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const renderUpcoming = ({item}: any) => (
  <Card mode="contained">
    <Card.Title
      titleVariant="titleMedium"
      subtitleVariant="bodyMedium"
      title={`${item.title} • ${item.provider}`}
      subtitle={`${item.date} ${item.time}`}
      left={props => <Avatar.Icon {...props} icon="calendar" />}
    />
    <Card.Actions>
      <Button mode="text" onPress={() => {}}>
        Cancel
      </Button>
      <Button mode="contained" onPress={() => {}}>
        Reschedule
      </Button>
    </Card.Actions>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const HomeScreen = ({navigation}: Props) => {
  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Upcoming Appointments
        </Text>
        <Button
          compact
          mode="contained-tonal"
          onPress={() => navigation.navigate('Upcoming')}
          style={styles.button}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={upcomingBookings.data}
        renderItem={renderUpcoming}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  cardWidth: {
    width: 270,
  },
});

export default HomeScreen;
