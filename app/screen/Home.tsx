import ListCopy from '../component/List_Image';
import LearnScreen from '../component/LearnMore';
import CalendarScreen from '../component/Calendar';
import CompareScreen from '../component/Comparephoto';
import List from '../component/List';
import HeadScreen from '../component/Head';
import TitleScreen from '../component/Title2';
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <HeadScreen />
      <CalendarScreen />
      <LearnScreen />
      <CompareScreen />
      <TitleScreen />
      <List navigation={navigation} />
      <ListCopy navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
