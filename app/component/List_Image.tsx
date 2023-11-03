import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function ListCopy({navigation}) {
  const [img, setImg] = useState([
    {src: require('../assets/images/anhgym1.jpg')},
    {src: require('../assets/images/anhgym2.jpg')},
    {src: require('../assets/images/anhgym3.jpg')},
    {src: require('../assets/images/gym4.jpg')},
    {src: require('../assets/images/gym5.jpg')},
    {src: require('../assets/images/gym6.jpg')},
    {src: require('../assets/images/gym7.png')},
  ]);
  return (
    <View style={styles.box5}>
      <Text style={{color: 'black'}}>8 May</Text>
      <FlatList
        horizontal={true}
        data={img}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              const img_new = [...img];
              img_new.splice(index, 1);
              console.log([...img], img_new);
              navigation.navigate('ExerciseScreen', {
                img: img_new,
                index,
                image: {
                  source: item.src,
                },
              });
            }}>
            <Image style={styles.pic} source={item.src} />
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  box5: {
    width: 'auto',
    height: 130,
    marginLeft: 5,
  },
  pic: {
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 5,
  },
});
export default ListCopy;
