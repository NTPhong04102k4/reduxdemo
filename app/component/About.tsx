import React from 'react';
import {Provider} from 'react-redux';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ValueScreen from './Value';
import store from '../redux/store';
function AccountScreen() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <ValueScreen />
      </View>
    </Provider>
  );
}
export default AccountScreen;
