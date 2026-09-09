import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'; 



// Import screens
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import SettingsScreen from './src/screens/setting';
import AboutScreen from './src/screens/about';
import Productdetail from './src/screens/productdetail'
import CustomDrawerContent from './src/compontents/customDrawer';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HomeStackNavigatior = () => {
  return (
     <Drawer.Navigator
      
        //   drawerContent={(props) => <CustomDrawerContent {...props} />}
        //   screenOptions={{
        //     headerStyle: {
        //       backgroundColor: 'transparent',
        //     },
        //     headerTintColor: '#000',
        //     headerTitleStyle: {
        //       fontWeight: 'bold',
        //     },
        //     drawerStyle: {
        //       backgroundColor: '#fff',
        //       width: 280,
        //     },
        //     drawerActiveTintColor: '#6200ee',
        //     drawerInactiveTintColor: '#333',
        //     drawerLabelStyle: {
        //       fontSize: 16,
        //       fontWeight: '500',
        //     },
        //   }}
         >
         <Drawer.Screen  
            options={{
                 headerTitle: '' // Removes the text from the top navigation bar
             }} 
             name="Home" component={HomeScreen}
          />
          <Drawer.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              title: 'My Profile',
              // drawerIcon: ({ color, size }) => (
              //   <Icon name="person" color={color} size={size} />
              // ),
            }}
          />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              title: 'Settings',
              // drawerIcon: ({ color, size }) => (
              //   <Icon name="settings" color={color} size={size} />
              // ),
            }}
          />
          <Drawer.Screen 
            name="About" 
            component={AboutScreen}
            options={{
              title: 'About',
              // drawerIcon: ({ color, size }) => (
              //   <Icon name="info" color={color} size={size} />
              // ),
            }}
          />
         </Drawer.Navigator>   
  );
};


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
 
     <Stack.Navigator>
      <Stack.Screen 
      options={{
          headerTitle:'',          
          drawerIcon: ({ color, size }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
      name="HomeMenu" component={HomeStackNavigatior} 

      />
      <Stack.Screen 
      options={{  headerTitle: '' }} 
      name="ProdcutDetails" component={Productdetail} />
      </Stack.Navigator>
      
      </NavigationContainer>
    </SafeAreaProvider>

  );
};


export default App;














// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// // Screens
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// // Create a Stack Navigator for Home flow
// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

// // Main App with Drawer containing Stack
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStack} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }