import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Topscreen from './Home';
import AboutScreen from './Detail';
import AccountScreen from '../component/About';
import CategoryScreen from './Category';

const BottomTab = createBottomTabNavigator();
function Bottom() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={Topscreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.img}
              source={require('../assets/images/home.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.img}
              source={require('../assets/images/user.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.img}
              source={require('../assets/images/gear.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.img}
              source={require('../assets/images/camera.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
});
export default Bottom;
