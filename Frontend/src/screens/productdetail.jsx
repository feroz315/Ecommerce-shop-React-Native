
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const product = {
  name: 'Minimal Leather Backpack',
  brand: 'NOVA',
  price: 89,
  oldPrice: 119,
  rating: 4.8,
  reviews: 324,
  description:
    'Designed for everyday adventures, this premium leather backpack combines timeless style with practical storage. Crafted from soft full-grain leather with a spacious interior.',
  images: [
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=90',
    'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1000&q=90',
    'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=90',
  ],
};

const colors = [
  { name: 'Black', value: '#171717' },
  { name: 'Brown', value: '#7A4B2A' },
  { name: 'Tan', value: '#C49A6C' },
];

 const ProductDetail = () => {

    const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.headerButton}>
            <Text style={styles.back}>‹</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Product Details</Text>

          <Pressable
            style={styles.headerButton}
            onPress={() => setFavorite(!favorite)}
          >
            <Text
              style={[
                styles.favorite,
                favorite && styles.favoriteActive,
              ]}
            >
              {favorite ? '♥' : '♡'}
            </Text>
          </Pressable>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.images[selectedImage] }}
            style={styles.mainImage}
          />

          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discount}% OFF</Text>
          </View>
        </View>

        {/* Image Thumbnails */}
        <View style={styles.thumbnailRow}>
          {product.images.map((image, index) => (
            <Pressable
              key={image}
              onPress={() => setSelectedImage(index)}
              style={[
                styles.thumbnail,
                selectedImage === index && styles.activeThumbnail,
              ]}
            >
              <Image
                source={{ uri: image }}
                style={styles.thumbnailImage}
              />
            </Pressable>
          ))}
        </View>

        {/* Product Information */}
        <View style={styles.content}>
          <Text style={styles.brand}>{product.brand}</Text>

          <Text style={styles.productName}>{product.name}</Text>

          {/* Rating */}
          <View style={styles.ratingRow}>
            <Text style={styles.stars}>★★★★★</Text>
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.reviewCount}>
              ({product.reviews} reviews)
            </Text>
          </View>

          {/* Price */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          </View>

          <View style={styles.separator} />

          {/* Color */}
          <View style={styles.optionHeader}>
            <Text style={styles.optionTitle}>Color</Text>
            <Text style={styles.selectedOption}>{selectedColor}</Text>
          </View>

          <View style={styles.colorRow}>
            {colors.map((color) => (
              <Pressable
                key={color.name}
                onPress={() => setSelectedColor(color.name)}
                style={[
                  styles.colorButton,
                  selectedColor === color.name &&
                    styles.selectedColorButton,
                ]}
              >
                <View
                  style={[
                    styles.colorCircle,
                    { backgroundColor: color.value },
                  ]}
                />
              </Pressable>
            ))}
          </View>

          {/* Quantity */}
          <View style={styles.optionHeader}>
            <Text style={styles.optionTitle}>Quantity</Text>

            <View style={styles.quantityContainer}>
              <Pressable
                onPress={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                style={styles.quantityButton}
              >
                <Text style={styles.quantityText}>−</Text>
              </Pressable>

              <Text style={styles.quantity}>{quantity}</Text>

              <Pressable
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityText}>+</Text>
              </Pressable>
            </View>
          </View>

          {/* Benefits */}
          <View style={styles.benefits}>
            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>✓</Text>
              <View>
                <Text style={styles.benefitTitle}>Free Shipping</Text>
                <Text style={styles.benefitText}>
                  Delivered to your door
                </Text>
              </View>
            </View>

            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>↻</Text>
              <View>
                <Text style={styles.benefitTitle}>30-Day Returns</Text>
                <Text style={styles.benefitText}>
                  Easy and hassle-free
                </Text>
              </View>
            </View>

            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>◆</Text>
              <View>
                <Text style={styles.benefitTitle}>Secure Payment</Text>
                <Text style={styles.benefitText}>
                  100% secure checkout
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description}>
            {product.description}
          </Text>

          <Text style={styles.readMore}>Read more</Text>

          {/* Details */}
          <Text style={styles.sectionTitle}>Product Details</Text>

          <View style={styles.detailsCard}>
            <DetailRow label="Material" value="Full-grain leather" />
            <DetailRow label="Dimensions" value="42 × 30 × 14 cm" />
            <DetailRow label="Weight" value="1.2 kg" />
            <DetailRow label="Warranty" value="2 years" />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Cart Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>
            ${(product.price * quantity).toFixed(2)}
          </Text>
        </View>

        <Pressable style={styles.addButton}>
          <Text style={styles.cartIcon}>🛒</Text>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F4',
  },

  scrollContent: {
    paddingBottom: 120,
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171815',
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  back: {
    fontSize: 34,
    color: '#191A17',
    marginTop: -5,
  },

  favorite: {
    fontSize: 25,
    color: '#22231F',
  },

  favoriteActive: {
    color: '#D05A45',
  },

  imageContainer: {
    marginHorizontal: 16,
    height: width * 0.95,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#E9E4DC',
    position: 'relative',
  },

  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  discountBadge: {
    position: 'absolute',
    top: 18,
    left: 18,
    backgroundColor: '#1D211B',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  discountText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.7,
  },

  thumbnailRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 14,
  },

  thumbnail: {
    width: 68,
    height: 68,
    padding: 2,
    borderRadius: 14,
  },

  activeThumbnail: {
    borderWidth: 2,
    borderColor: '#1D211B',
  },

  thumbnailImage: {
    flex: 1,
    borderRadius: 10,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  brand: {
    fontSize: 12,
    color: '#85867F',
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 7,
  },

  productName: {
    fontSize: 29,
    lineHeight: 35,
    fontWeight: '800',
    color: '#171815',
    letterSpacing: -0.6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  stars: {
    color: '#D89043',
    fontSize: 15,
    letterSpacing: 2,
  },

  rating: {
    marginLeft: 8,
    color: '#242520',
    fontSize: 13,
    fontWeight: '800',
  },

  reviewCount: {
    marginLeft: 5,
    color: '#898A83',
    fontSize: 13,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
  },

  price: {
    fontSize: 25,
    color: '#171815',
    fontWeight: '800',
  },

  oldPrice: {
    marginLeft: 10,
    fontSize: 14,
    color: '#A5A59E',
    textDecorationLine: 'line-through',
  },

  separator: {
    height: 1,
    backgroundColor: '#E5E2DB',
    marginVertical: 24,
  },

  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  optionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#242520',
  },

  selectedOption: {
    color: '#85867F',
    fontSize: 13,
  },

  colorRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 25,
  },

  colorButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#1C201B',
  },

  colorCircle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
  },

  quantityButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F0EC',
    borderRadius: 8,
  },

  quantityText: {
    fontSize: 18,
    color: '#252620',
  },

  quantity: {
    width: 32,
    textAlign: 'center',
    fontWeight: '700',
    color: '#22231F',
  },

  benefits: {
    backgroundColor: '#EEEAE2',
    borderRadius: 20,
    padding: 16,
    marginTop: 8,
    marginBottom: 26,
  },

  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  benefitIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#DCE5D8',
    color: '#536A4F',
    textAlign: 'center',
    lineHeight: 38,
    fontSize: 16,
    marginRight: 12,
  },

  benefitTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#343630',
  },

  benefitText: {
    marginTop: 2,
    color: '#85867F',
    fontSize: 11,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#242520',
    marginBottom: 10,
    marginTop: 10,
  },

  description: {
    color: '#70716A',
    fontSize: 14,
    lineHeight: 22,
  },

  readMore: {
    color: '#3F5940',
    fontWeight: '800',
    fontSize: 13,
    marginTop: 7,
    marginBottom: 24,
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EEE9',
  },

  detailLabel: {
    color: '#90918A',
    fontSize: 13,
  },

  detailValue: {
    color: '#343530',
    fontSize: 13,
    fontWeight: '700',
  },

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E2DB',
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalLabel: {
    fontSize: 11,
    color: '#92938B',
    marginBottom: 2,
  },

  totalPrice: {
    fontSize: 21,
    color: '#171815',
    fontWeight: '800',
  },

  addButton: {
    height: 54,
    minWidth: 175,
    paddingHorizontal: 20,
    borderRadius: 18,
    backgroundColor: '#1D211B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartIcon: {
    fontSize: 16,
    marginRight: 9,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});


export default ProductDetail;