import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Welcome to the ClickKhaas!</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.buttonText}>Open Drawer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#03dac6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;













// import { useNavigation } from '@react-navigation/native';

// const SomeComponent = () => {
//   const navigation = useNavigation();

//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Text>Open Drawer</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.closeDrawer()}>
//         <Text>Close Drawer</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//         <Text>Toggle Drawer</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };






// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="HomeMain" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// };

// // In Drawer Navigator
// <Drawer.Screen name="Home" component={HomeStack} />


// <Drawer.Navigator
//   screenOptions={{
//     drawerStyle: {
//       backgroundColor: '#f5f5f5',
//       width: 280,
//     },
//     drawerActiveBackgroundColor: '#6200ee',
//     drawerActiveTintColor: '#fff',
//     drawerInactiveTintColor: '#333',
//     drawerItemStyle: {
//       borderRadius: 8,
//       marginHorizontal: 8,
//     },
//     drawerLabelStyle: {
//       fontSize: 16,
//       fontWeight: '500',
//     },
//   }}
// >
//   {/* ... screens */}
// </Drawer.Navigator>