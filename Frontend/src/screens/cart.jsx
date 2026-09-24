import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const initialCart = [
  {
    id: '1',
    name: 'Nike Air Max',
    size: '42',
    color: 'Black',
    price: 120,
    quantity: 1,
    image: require('../assets/Images/nike.png'),
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    size: '43',
    color: 'White',
    price: 150,
    quantity: 2,
    image: require('../assets/Images/nike.png'),
  },
  {
    id: '3',
    name: 'Puma Running Shoes',
    size: '41',
    color: 'Blue',
    price: 95,
    quantity: 1,
    image: require('../assets/Images/nike.png'),
  },
];


const CartScreen = ({navigation}) => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    );
  };

  const decreaseQuantity = id => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const delivery = subtotal > 0 ? 10 : 0;
  const total = subtotal + delivery;

  const renderItem = ({item}) => (
    <View style={styles.card}>

      {/* Product Image */}
      <Image source={item.image} style={styles.productImage} />

      {/* Product Details */}
      <View style={styles.details}>
        <View style={styles.topRow}>
          <Text style={styles.productName} numberOfLines={1}>
            {item.name}
          </Text>

          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Ionicons
              name="trash-outline"
              size={21}
              color="#e53935"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.productInfo}>
          Size: {item.size} • {item.color}
        </Text>

        <Text style={styles.price}>${item.price}</Text>

        {/* Quantity */}
        <View style={styles.bottomRow}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decreaseQuantity(item.id)}>
              <Ionicons name="remove" size={18} color="#222" />
            </TouchableOpacity>

            <Text style={styles.quantity}>
              {item.quantity}
            </Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => increaseQuantity(item.id)}>
              <Ionicons name="add" size={18} color="#222" />
            </TouchableOpacity>
          </View>

          <Text style={styles.itemTotal}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Cart</Text>

        <View style={styles.cartIcon}>
          <Ionicons name="bag-outline" size={24} color="#111" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        </View>
      </View>

      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />

          {/* Order Summary */}
          <View style={styles.summary}>

            <Text style={styles.summaryTitle}>
              Order Summary
            </Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Subtotal
              </Text>
              <Text style={styles.summaryValue}>
                ${subtotal.toFixed(2)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Delivery
              </Text>
              <Text style={styles.summaryValue}>
                ${delivery.toFixed(2)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>
                Total
              </Text>
              <Text style={styles.totalValue}>
                ${total.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity style={styles.checkoutButton}
             onPress={() => navigation.navigate("Checkout")}>           
              <Text style={styles.checkoutText}>
                Proceed to Checkout
              </Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="cart-outline"
            size={80}
            color="#ccc"
          />

          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>

          <Text style={styles.emptyText}>
            Add some products to your cart and they will
            appear here.
          </Text>

          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>
              Start Shopping
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },

  // Header
  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111',
  },

  cartIcon: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    right: -7,
    top: -7,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#ff4d4d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

  // List
  list: {
    padding: 16,
    paddingBottom: 15,
  },

  // Product Card
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  productImage: {
    width: 105,
    height: 115,
    borderRadius: 14,
    backgroundColor: '#f1f2f6',
    resizeMode: 'cover',
  },

  details: {
    flex: 1,
    marginLeft: 13,
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  productName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
    marginRight: 8,
  },

  productInfo: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },

  price: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
    marginTop: 6,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  // Quantity
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    borderRadius: 10,
    padding: 3,
  },

  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantity: {
    width: 32,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },

  itemTotal: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  // Summary
  summary: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    elevation: 8,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#777',
  },

  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 5,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },

  totalValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },

  checkoutButton: {
    height: 55,
    borderRadius: 15,
    backgroundColor: '#111',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  // Empty Cart
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 20,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    lineHeight: 21,
    marginTop: 8,
  },

  shopButton: {
    backgroundColor: '#111',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 25,
  },

  shopButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});