import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';

function ExerciseScreen({navigation, route}) {
  const initImage = route?.params.image.source;
  const img = route?.params.img;
  const index = route?.params.index;

  const [count, setCount] = useState(-1);
  return (
    <View style={styles.container}>
      <View style={styles.flex_item1}>
        <ImageBackground
          style={{flex: 1}}
          source={count == -1 ? initImage : img[count].src}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // img.splice(index, 0, route?.params.image.source),
              navigation.goBack();
            }}>
            <Image
              style={styles.goBack}
              source={require('../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.flex_item2}>
        <View style={styles.item1}>
          <Text style={styles.title}>Abs</Text>
          <Text style={styles.content}>
            Want washboard abs? This is the workout for you. A short workout
            that targets every part of your abs.
          </Text>
          <View style={styles.row_btn}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={styles.btn_img}
                source={require('../assets/images/weight.png')}></Image>
              <Text style={styles.btn_text_hover}>Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
              <Image
                style={styles.btn_img}
                source={require('../assets/images/time.png')}></Image>
              <Text style={styles.btn_text}>MINUTES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={styles.btn_img}
                source={require('../assets/images/fire.png')}></Image>
              <Text style={styles.btn_text_hover}>CALORIES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item2}>
          <Text style={styles.title_item2}>Exercises</Text>
          <FlatList
            data={img}
            renderItem={({item, index}) => (
              <View style={styles.btn_long}>
                <TouchableOpacity
                  onPress={() => {
                    if (count == index) {
                      setCount(-1);
                    } else setCount(index);
                  }}>
                  <Image style={styles.btn_long_img} source={item.src} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_long_div}>
                  <View style={styles.btn_long_content}>
                    <Text style={styles.btn_long_text1}>{item.title}</Text>
                    <Text style={styles.btn_long_text2}>{item.num}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_long_div_img2}>
                  <Image
                    source={require('../assets/images/play.png')}
                    style={styles.btn_long_div_img2_style}></Image>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <TouchableOpacity style={styles.btn_start}>
          <Text style={styles.btn_start_text}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex_item1: {
    flex: 1,
  },
  flex_item2: {
    flex: 1.8,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  item1: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    color: 'black',
    marginTop: 5,
    marginBottom: 10,
  },
  row_btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 'auto',
  },
  btn: {
    flex: 1,
    backgroundColor: '#99FFFF',
    flexDirection: 'row',
    margin: 'auto',
    width: 100,
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  btn1: {
    flex: 1,
    backgroundColor: '#99FFFF',
    flexDirection: 'row',
    margin: 'auto',
    width: 100,
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  btn_img: {width: 20, height: 20},
  btn_text: {fontSize: 10, color: 'black', marginLeft: 5},
  btn_text_hover: {
    fontSize: 10,
    color: '#0099CC',
    marginLeft: 5,
  },
  item2: {
    flex: 2,
    flexDirection: 'column',
  },
  title_item2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  btn_long: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  btn_long_img: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    flex: 1,
  },
  btn_long_div: {height: 70, width: 220},
  btn_long_content: {
    flexDirection: 'column',
    margin: 'auto',
    padding: 10,
  },
  btn_long_text1: {
    width: 200,
    height: 25,
    color: 'black',
    overflow: 'hidden',
    fontSize: 18,
  },
  btn_long_text2: {
    color: 'black',
    fontWeight: '100',
    fontSize: 15,
  },
  btn_long_div_img2: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#CCFFFF',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  },
  btn_long_div_img2_style: {
    height: 20,
    width: 20,
    tintColor: '#3399FF',
  },
  btn_start: {
    height: 50,
    width: 'auto',
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: -2,
    marginRight: 2,
  },
  btn_start_text: {fontSize: 30},
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    margin: 'auto',
    padding: 15,
  },
  goBack: {
    height: 20,
    width: 20,
  },
});

export default ExerciseScreen;
