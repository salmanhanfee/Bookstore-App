import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import Home from "./Home";
import Search from "./Search";
import BookDetails from "../Components/BookDetails";
import Categories  from './Categories';
import Profile from './Profile';
import DetailsScreen from '../Components/DetailsScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function BookStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen  options={{
        headerShown: false,
      }}
      name="Home" component={Home} />
      <Stack.Screen name="Book Details" component={BookDetails} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen  options={{
        headerShown: false,
      }}
      name="Search" component={Search} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// function CategoryStack() {
//   return (
//     <Stack.Navigator headerMode={false}>
//       <Stack.Screen  options={{
//         headerShown: false,
//       }}
//       name="Category" component={Categories} />
//       <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

const ScreenStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      // barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={BookStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fa8072',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarColor: '#ff9933',
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#87ceeb',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#708090',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default ScreenStack;