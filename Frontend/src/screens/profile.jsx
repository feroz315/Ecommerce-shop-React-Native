import React from 'react';
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



const ProfileScreen = ({ navigation }) => {

  const menuItems = [
    {
      id: '1',
      title: 'My Orders',
      subtitle: 'View your order history',
      icon: '📦',
      screen: 'Orders',
    },
    {
      id: '2',
      title: 'Wishlist',
      subtitle: 'Your favorite products',
      icon: '❤️',
      screen: 'Wishlist',
    },
    {
      id: '3',
      title: 'Shipping Addresses',
      subtitle: 'Manage your addresses',
      icon: '📍',
      screen: 'Addresses',
    },
    {
      id: '4',
      title: 'Payment Methods',
      subtitle: 'Manage your payments',
      icon: '💳',
      screen: 'Payments',
    },
    {
      id: '5',
      title: 'Settings',
      subtitle: 'Account and app settings',
      icon: '⚙️',
      screen: 'Settings',
    },
    {
      id: '6',
      title: 'Help Center',
      subtitle: 'Get help and support',
      icon: '❓',
      screen: 'Help',
    },
  ];

  const handleMenuPress = (item) => {
    if (item.screen) {
      navigation?.navigate(item.screen);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            console.log('User logged out');
          },
        },
      ]
    );
  };


  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation?.navigate('Settings')}
        >
          <Text style={styles.settingsIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Profile Header */}
        <View style={styles.profileCard}>

          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://i.pravatar.cc/300?img=12',
              }}
              style={styles.avatar}
            />

            <TouchableOpacity
              style={styles.editAvatarButton}
              onPress={() =>
                Alert.alert('Edit Profile', 'Choose a new profile picture')
              }
            >
              <Text style={styles.editIcon}>✎</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>
            Feroz Khan
          </Text>

          <Text style={styles.userEmail}>
            feroz@example.com
          </Text>

          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation?.navigate('EditProfile')}
          >
            <Text style={styles.editProfileText}>
              Edit Profile
            </Text>
          </TouchableOpacity>

        </View>

        {/* Account Overview */}
        <View style={styles.statsCard}>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>08</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>04</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>

        </View>

        {/* Account Section */}
        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <View style={styles.menuCard}>

          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => handleMenuPress(item)}
              >

                <View style={styles.menuIconContainer}>
                  <Text style={styles.menuIcon}>
                    {item.icon}
                  </Text>
                </View>

                <View style={styles.menuContent}>
                  <Text style={styles.menuTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.menuSubtitle}>
                    {item.subtitle}
                  </Text>
                </View>

                <Text style={styles.arrow}>
                  ›
                </Text>

              </TouchableOpacity>

              {index !== menuItems.length - 1 && (
                <View style={styles.menuDivider} />
              )}

            </React.Fragment>
          ))}

        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutIcon}>
            ↪
          </Text>

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>
          App Version 1.0.0
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#171717',
  },

  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F2F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsIcon: {
    fontSize: 22,
    color: '#333333',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },

  avatarContainer: {
    position: 'relative',
    marginBottom: 14,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 52.5,
    borderWidth: 4,
    borderColor: '#EEEAFE',
  },

  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5B4BDB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  editIcon: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 6,
  },

  userEmail: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 18,
  },

  editProfileButton: {
    paddingHorizontal: 30,
    paddingVertical: 11,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#5B4BDB',
  },

  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B4BDB',
  },

  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 20,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#5B4BDB',
    marginBottom: 5,
  },

  statLabel: {
    fontSize: 13,
    color: '#777777',
  },

  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#EEEEEE',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#171717',
    marginTop: 26,
    marginBottom: 12,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },

  menuIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#F2F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  menuIcon: {
    fontSize: 21,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 5,
  },

  menuSubtitle: {
    fontSize: 12,
    color: '#888888',
  },

  arrow: {
    fontSize: 28,
    fontWeight: '300',
    color: '#AAAAAA',
    marginLeft: 8,
  },

  menuDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 57,
  },

  logoutButton: {
    backgroundColor: '#FFF0F0',
    height: 56,
    borderRadius: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutIcon: {
    fontSize: 23,
    color: '#E53935',
    marginRight: 10,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E53935',
  },

  versionText: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 22,
  },

});