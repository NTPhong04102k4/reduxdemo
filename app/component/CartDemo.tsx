import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {increment, decrement} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';
function CartDemoScreen({navigation, route}) {
  const [state, setState] = useState(0);
  const title = route?.params?.image.title;
  const img = route?.params?.image.source;
  const value = useSelector((state): any => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.imgbackground} source={img}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.buttongoBack}
                source={require('../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardcollection}>
              <Text style={styles.count}>{value}</Text>
              <Image
                style={styles.icon}
                source={require('../assets/images/shopping-cart.png')}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <Text style={styles.content}>Tên loại giày:{title}</Text>
        <Text style={styles.content}>Size:39</Text>
        <Text style={styles.content}>Đối tượng sử dụng: Nam,Nữ </Text>
        <Text style={styles.content}>Core:350,000 VND</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.cardcount}>
          <TouchableOpacity
            style={styles.buttonAction}
            onPress={() => {
              setState(state + 1);
            }}>
            <Text style={styles.textbutton}>+</Text>
          </TouchableOpacity>
          <View style={styles.counter}>
            <Text style={styles.textbutton}> số lượng: {state}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonAction}
            onPress={() => {
              if (state != 0) setState(state - 1);
            }}>
            <Text style={styles.textbutton}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.core}>Giá tiền:{state * 350000} VND</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (state != 0) {
                dispatch(increment());
                Alert.alert('Bạn đã thêm thành công');
                navigation.goBack();
              }
            }}>
            <Text style={styles.textbutton}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  icon: {
    height: 25,
    width: 25,
  },
  cardcollection: {
    height: 50,
    width: 50,
    backgroundColor: '#FFCC99',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgbackground: {
    flex: 1,
  },
  count: {
    color: 'red',
    fontSize: 15,
  },
  goBack: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttongoBack: {
    height: 32,
    width: 32,
  },
  body: {
    flex: 1.5,
    backgroundColor: 'white',
    borderTopColor: 'sliver',
    borderTopWidth: 1,
  },
  content: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flex: 1,
  },
  cardcount: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAction: {
    flex: 1,
    backgroundColor: 'greenyellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'sliver',
    flex: 3,
    color: 'black',
  },
  core: {
    height: '35%',
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },

  textbutton: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  card: {
    height: '35%',
  },
  button: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FF9933',
    justifyContent: 'space-evenly',
  },
  imgbutton: {
    height: 40,
    width: 40,
  },
});

export default CartDemoScreen;
