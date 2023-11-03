import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function Title() {
  return (
    <View style={styles.box4}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Gallery
      </Text>
      <TouchableOpacity>
        <Text style={styles.p}>see more</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  box4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 340,
    height: '5%',
    margin: 'auto',
    padding: 5,
  },
  p: {
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
export default Title;
