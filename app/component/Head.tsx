import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
function Head() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Text style={styles.field}>Progress Photo</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/more.png')}
            style={styles.pic}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  child: {
    flex: 2,
    alignItems: 'flex-end',
  },
  field: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
    color: 'black',
    alignItems: 'center',
  },
  pic: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
});
export default Head;
