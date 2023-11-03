import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/action';

const Counter = () => {
  const value = useSelector((state): any => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>value:{value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'aqua',
    width: 100,
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    margin: 'auto',
    padding: 10,
    color: 'black',
  },
});
export default Counter;
