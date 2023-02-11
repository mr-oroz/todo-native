import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from 'react';

const MyButton = ({ children, color = '#e17055', onPress, textColor ='#fff' }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={{ ...styles.btn, backgroundColor: color }}>
        <Text
          style={{ ...styles.text, color: textColor }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 5
  },
});

export default MyButton;