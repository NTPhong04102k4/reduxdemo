import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
function Compare() {
  return (
    <View style={styles.box3}>
      <Text style={{fontSize: 15, textAlign: 'left'}}>Compare My Photo </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize: 15, textAlign: 'center'}}>Compare</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  box3: {
    backgroundColor: '#63B8FF',
    width: 340,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'space-between',
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  btn: {
    backgroundColor: '#FFC1C1',
    height: '50%',
    width: '30%',
    textAlign: 'center',
    borderRadius: 20,
  },
});
export default Compare;
