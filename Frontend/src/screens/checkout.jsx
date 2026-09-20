
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const CheckoutScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const product = {
    name: 'Nike Air Max Shoes',
    size: 'US 9',
    quantity: 1,
    price: 120,
    image: require('../assets/Images/nike.png'),
  };

  const subtotal = product.price * product.quantity;
  const shipping = 10;
  const total = subtotal + shipping;

  const placeOrder = () => {
    Alert.alert(
      'Order Placed',
      'Your order has been placed successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation?.goBack(),
        },
      ]
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Checkout</Text>

        <View style={styles.headerSpace} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Shipping Address */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Shipping Address
            </Text>

            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.addressCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>⌖</Text>
            </View>

            <View style={styles.addressContent}>
              <Text style={styles.addressName}>
                Feroz Khan
              </Text>

              <Text style={styles.addressText}>
                House 123, Street 10
              </Text>

              <Text style={styles.addressText}>
                Karachi, Pakistan
              </Text>

              <Text style={styles.addressText}>
                +92 300 1234567
              </Text>
            </View>
          </View>
        </View>

        {/* Product Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Order Summary
          </Text>

          <View style={styles.productCard}>
            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="contain"
            />

            <View style={styles.productInfo}>
              <Text style={styles.productName}>
                {product.name}
              </Text>

              <Text style={styles.productSize}>
                Size: {product.size}
              </Text>

              <Text style={styles.productQuantity}>
                Qty: {product.quantity}
              </Text>

              <Text style={styles.productPrice}>
                ${product.price.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Payment Method
          </Text>

          {/* Card */}
          <TouchableOpacity
            style={[
              styles.paymentCard,
              paymentMethod === 'card' &&
                styles.selectedPayment,
            ]}
            onPress={() => setPaymentMethod('card')}
          >
            <View style={styles.paymentIcon}>
              <Text style={styles.paymentIconText}>▣</Text>
            </View>

            <View style={styles.paymentInfo}>
              <Text style={styles.paymentTitle}>
                Credit / Debit Card
              </Text>

              <Text style={styles.paymentSubtitle}>
                Visa, Mastercard
              </Text>
            </View>

            <View
              style={[
                styles.radio,
                paymentMethod === 'card' &&
                  styles.radioSelected,
              ]}
            >
              {paymentMethod === 'card' && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>

          {/* Cash on Delivery */}
          <TouchableOpacity
            style={[
              styles.paymentCard,
              paymentMethod === 'cash' &&
                styles.selectedPayment,
            ]}
            onPress={() => setPaymentMethod('cash')}
          >
            <View style={styles.paymentIcon}>
              <Text style={styles.paymentIconText}>$</Text>
            </View>

            <View style={styles.paymentInfo}>
              <Text style={styles.paymentTitle}>
                Cash on Delivery
              </Text>

              <Text style={styles.paymentSubtitle}>
                Pay when your order arrives
              </Text>
            </View>

            <View
              style={[
                styles.radio,
                paymentMethod === 'cash' &&
                  styles.radioSelected,
              ]}
            >
              {paymentMethod === 'cash' && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* Price Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Price Details
          </Text>

          <View style={styles.priceCard}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>
                Subtotal
              </Text>

              <Text style={styles.priceValue}>
                ${subtotal.toFixed(2)}
              </Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>
                Shipping
              </Text>

              <Text style={styles.priceValue}>
                ${shipping.toFixed(2)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>
                Total
              </Text>

              <Text style={styles.totalValue}>
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Checkout */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomPrice}>
          <Text style={styles.bottomLabel}>
            Total Amount
          </Text>

          <Text style={styles.bottomTotal}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => navigation.navigate("Profile")}           
         
          activeOpacity={0.8}
        >
          <Text style={styles.placeOrderText}>
            Place Order →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F2F4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    fontSize: 32,
    color: '#222222',
    lineHeight: 35,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },

  headerSpace: {
    width: 40,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 30,
  },

  section: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 12,
  },

  changeText: {
    color: '#5B4BDB',
    fontSize: 14,
    fontWeight: '600',
  },

  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EEEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  iconText: {
    fontSize: 24,
    color: '#5B4BDB',
  },

  addressContent: {
    flex: 1,
  },

  addressName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 5,
  },

  addressText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 3,
    lineHeight: 20,
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  productImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },

  productInfo: {
    flex: 1,
    marginLeft: 14,
  },

  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 6,
  },

  productSize: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },

  productQuantity: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 8,
  },

  productPrice: {
    fontSize: 17,
    fontWeight: '700',
    color: '#5B4BDB',
  },

  paymentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },

  selectedPayment: {
    borderColor: '#5B4BDB',
    backgroundColor: '#FAF9FF',
  },

  paymentIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EEEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  paymentIconText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#5B4BDB',
  },

  paymentInfo: {
    flex: 1,
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 4,
  },

  paymentSubtitle: {
    fontSize: 12,
    color: '#888888',
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#D0D0D0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioSelected: {
    borderColor: '#5B4BDB',
  },

  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5B4BDB',
  },

  priceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  priceLabel: {
    fontSize: 14,
    color: '#777777',
  },

  priceValue: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 16,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#171717',
  },

  totalValue: {
    fontSize: 19,
    fontWeight: '700',
    color: '#5B4BDB',
  },

  bottomContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  bottomPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  bottomLabel: {
    fontSize: 14,
    color: '#777777',
  },

  bottomTotal: {
    fontSize: 22,
    fontWeight: '800',
    color: '#171717',
  },

  placeOrderButton: {
    backgroundColor: '#5B4BDB',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeOrderText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});