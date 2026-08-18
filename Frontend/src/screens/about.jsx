import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.subtitle}>App Version 1.0.0</Text>
      <Text style={styles.description}>
        This is a sample app demonstrating drawer navigation in React Native.
      </Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#bf360c',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#e65100',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AboutScreen;





const ProductDetail = ({ route }) => {
  const { shoe } = route.params;
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          data={shoe.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.mainImage} />
          )}
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
        />
        
        <View style={styles.details}>
          <Text style={styles.name}>{shoe.name}</Text>
          <Text style={styles.brand}>{shoe.brand}</Text>
          <Text style={styles.price}>${shoe.price}</Text>
          <Text style={styles.rating}>⭐ {shoe.rating} ({shoe.reviews} reviews)</Text>
          
          <Text style={styles.sectionTitle}>Available Sizes</Text>
          <View style={styles.sizeContainer}>
            {shoe.sizes.map(size => (
              <TouchableOpacity key={size} style={styles.sizeButton}>
                <Text>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{shoe.description}</Text>
          
          <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};