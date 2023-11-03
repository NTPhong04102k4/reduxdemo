import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Counter from './Action';
import {View, StyleSheet} from 'react-native';
function AboutScreen() {
  return (
    <Provider store={store}>
      <View style={styles.detail}>
        <Counter />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  detail: {
    flex: 1,
  },
});
export default AboutScreen;
