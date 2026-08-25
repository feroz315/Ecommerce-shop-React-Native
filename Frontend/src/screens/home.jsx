import {useState, useEffect} from 'react';
import { View, Image,Text, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import { shoesData } from "../config/api";





const URL_API = "https://mocki.io/v1/20a23fa8-7a39-45e8-9393-e03c275b28dd";


const HomeScreen = () => {
  
  const [products, setProducts] = useState([]);
 
  const navigation = useNavigation();


  // const getdata = async () => {
  //   try {
  //     const res = await axios.get(URL_API);
  //     console.log(res.data);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };


const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image 
        source={{ uri: item.thumbnail }} 
        resizeMode="cover"
      />
      
      <View>
       {/* <Image source={[item.images]} style={styles.productImage} /> */}
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.brand}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.ratingText}>⭐ {item.rating} ({item.reviews})</Text>
      </View>
    </TouchableOpacity>
  );


  // useEffect(() => {
  //   getdata();
    
  // }, []);


  return (
    <View style={styles.container}>
     
     <FlatList
      data={shoesData.shoes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}      
    />
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
  productTitle: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    color: '#1A1A1A',
    marginBottom: verticalScale(8),
  },
  productCategory: {
    fontSize: moderateScale(12),
    color: '#8D8D8D',
    marginBottom: verticalScale(3),
  },
  productPrice: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FF6B6B',
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