import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
function Learn() {
  return (
    <View style={styles.box2}>
      <View style={{flex: 2}}>
        <Text style={styles.p1}>Track your Progress Each Month With Photo</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 15}}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Image
          style={styles.pic}
          source={require('../assets/images/lich-am-thang-6-nam-2023.jpg')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box2: {
    backgroundColor: '#5CACEE',
    width: 340,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  p1: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'left',
    marginLeft: 10,
  },
  btn: {
    margin: 'auto',
    marginTop: 10,
    height: '35%',
    width: '60%',
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  pic: {
    height: 90,
    width: 90,
    margin: 'auto',
    padding: 5,
  },
});
export default Learn;
