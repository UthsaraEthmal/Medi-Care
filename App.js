import { NavigationContainer } from "@react-navigation/native";
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Remider1 from './screens/Remider1';

const stack=createNativeStackNavigator()
export default function App(){
return(
  <NavigationContainer>
    <stack.Navigator>

<stack.Screen name= 'Remider1' component={Remider1}/>

    </stack.Navigator>
  </NavigationContainer>
)

}