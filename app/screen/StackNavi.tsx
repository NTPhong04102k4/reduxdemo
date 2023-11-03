import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ExerciseScreen from './Excercies';
import Topscreen from './Home';
import Bottom from './Bottomtabnavi';
import CartScreen from './Cart';
const StackNavi = createStackNavigator();
function Navi() {
  return (
    <StackNavi.Navigator initialRouteName="Bottom">
      <StackNavi.Screen
        name="Home"
        component={Bottom}
        options={{
          headerShown: false,
        }}
      />
      <StackNavi.Screen
        name="ExerciseScreen"
        component={ExerciseScreen}
        options={{headerShown: false}}
      />
      <StackNavi.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </StackNavi.Navigator>
  );
}
export default Navi;
