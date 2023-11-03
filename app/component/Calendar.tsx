import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
function Calendar() {
  return (
    <View style={styles.box1}>
      <View style={styles.box_item1}>
        <TouchableOpacity>
          <Image
            style={styles.box_anh}
            source={require('../assets/images/calendar.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box_item2}>
        <Text style={styles.p1}>Reminder!</Text>
        <Text style={styles.p2}>Next Photos Fail On July 08</Text>
      </View>
      <TouchableOpacity style={{paddingRight: 20}}>
        <Image
          source={require('../assets/images/reject.png')}
          style={styles.pic}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: '#FAEBD7',
    flexDirection: 'row',
    borderRadius: 15,
    margin: 5,
    width: 340,
    height: 60,
    alignItems: 'center',
    paddingLeft: 5,
  },
  box_item1: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  box_anh: {
    height: 30,
    width: 30,
    margin: 5,
    marginLeft: 7,
  },
  box_item2: {
    flex: 1,
    paddingLeft: 10,
  },
  p1: {
    fontSize: 15,
    color: 'red',
    fontWeight: '500',
  },
  p2: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'black',
  },
  pic: {
    height: 20,
    width: 20,
  },
});
export default Calendar;
