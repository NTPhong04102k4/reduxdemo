import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from '../redux/store';
import CartDemoScreen from '../component/CartDemo';
function CartScreen({navigation, route}: any) {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <CartDemoScreen navigation={navigation} route={route} />
      </View>
    </Provider>
  );
}
export default CartScreen;
