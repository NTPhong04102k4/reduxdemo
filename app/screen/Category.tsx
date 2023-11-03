import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import * as React from 'react';
import CartScreen from '../screen/Cart';
const image = [
  {
    title: 'Giày Âu',
    src: require('../assets/imagesCategory/shoes1.jpg'),
  },
  {
    title: 'Giày lười',
    src: require('../assets/imagesCategory/shoes2.jpg'),
  },
  {
    title: 'Giày thể thao',
    src: require('../assets/imagesCategory/shoes3.jpg'),
  },
  {
    title: 'Giày thời trang',
    src: require('../assets/imagesCategory/shoes4.jpg'),
  },
];
const img = [
  {
    title: 'AHARY RUNNER',
    src: require('../assets/imagesCategory/shoes5.jpg'),
  },
  {
    title: 'MONTER',
    src: require('../assets/imagesCategory/shoes6.jpg'),
  },
  {
    title: 'NOW',
    src: require('../assets/imagesCategory/shoes8.jpg'),
  },
  {
    title: 'NOW',
    src: require('../assets/imagesCategory/shoes9.jpg'),
  },
];
function Category1() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.img}
        source={require('../assets/imagesCategory/shoes.jpg')}></ImageBackground>
    </View>
  );
}
function Category2({navigation}) {
  return (
    <View>
      <Text style={styles.title}>DANH MỤC SẢN PHẨM</Text>
      <FlatList
        horizontal={true}
        data={image}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('CartScreen', {
                  image: {
                    source: item.src,
                    title: item.title,
                  },
                });
              }}>
              <View>
                <Image style={styles.imgbutton} source={item.src}></Image>
                <Text style={styles.textbutton}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
function Category3({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>GIÀY ÂU</Text>
      <FlatList
        horizontal={true}
        data={img}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.navigate('CartScreen', {
                image: {
                  source: item.src,
                  title: item.title,
                },
              });
            }}>
            <Image style={styles.imgbutton2} source={item.src}></Image>
            <Text style={styles.imgbuttontext}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
function CategoryScreen({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <Category1 />
      <Category2 navigation={navigation} />
      <Category3 navigation={navigation} />
    </View>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'stretch',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    height: 50,
    fontSize: 18,
    paddingBottom: 5,
    paddingTop: 15,
  },
  button: {
    height: 120,
    width: 120,
    alignItems: 'center',
  },
  imgbutton: {
    width: 100,
    height: 100,
  },
  textbutton: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  button2: {
    height: 200,
    width: 180,
    backgroundColor: 'white',
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  imgbutton2: {
    height: 170,
    width: 150,
  },
  imgbuttontext: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
