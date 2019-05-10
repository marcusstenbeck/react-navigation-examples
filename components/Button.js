import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default ({ text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: 'lightblue',
      borderRadius: 4,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
      minHeight: 48,
      justifyContent: 'center'
    }}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);
