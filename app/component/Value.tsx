import React from 'react';
import {RootState} from 'redux/store';
import store from '../redux/store';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
function ValueScreen() {
  const value = useSelector((state): any => state.counter.value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ Và Tên:Nguyễn Thế Phong</Text>
      <View style={styles.input}>
        <Text style={styles.textnamsinh}>Email:</Text>
        <TextInput style={styles.textinput}></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>value:{value}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 'auto',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
  },
  textinput: {
    height: 40,
    width: 250,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 14,
    color: 'black',
    fontWeight: '300',
  },
  textnamsinh: {
    fontSize: 15,
    color: 'black',
    padding: 5,
  },
  button: {
    backgroundColor: 'greenyellow',
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default ValueScreen;
