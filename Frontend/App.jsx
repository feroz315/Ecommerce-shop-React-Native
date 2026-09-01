import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';



// Import screens
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import SettingsScreen from './src/screens/setting';
import AboutScreen from './src/screens/about';
import CustomDrawerContent from './src/compontents/customDrawer';



const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
        //   drawerContent={(props) => <CustomDrawerContent {...props} />}
        //   screenOptions={{
        //     headerStyle: {
        //       backgroundColor: '#f5f5f5',
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
            name="Home" 
            component={HomeScreen} 
            // options={{
            //   title: 'Home',
            //   // drawerIcon: ({ color, size }) => (
            //   //   <Icon name="home" color={color} size={size} />
            //   // ),
            // }}
            options={{
                 headerTitle: '' // Removes the text from the top navigation bar
             }} 
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