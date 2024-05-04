import { NavigationContainer } from "@react-navigation/native";
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Remider1 from './screens/Remider1';
import Option from './screens/Option';
import Remider2 from './screens/Remider2';
import Remider3 from './screens/Remider3';

const stack=createNativeStackNavigator()
export default function App(){
return(
  <NavigationContainer>
    <stack.Navigator>

<stack.Screen name="Option" component={Option}/>
<stack.Screen name= 'Remider1' component={Remider1}/>
<stack.Screen name= 'Remider2' component={Remider2}/>
<stack.Screen name= 'Remider3' component={Remider3}/>

    </stack.Navigator>
  </NavigationContainer>
)

}