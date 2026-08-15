module.exports = {
  presets: ['module:@react-native/babel-preset'],
   plugins: [
    // ... other plugins must come BEFORE reanimated
    'react-native-reanimated/plugin', 
  ],
};
