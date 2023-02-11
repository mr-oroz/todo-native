import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
  const {todos} = useSelector(state => state)

  return (
    <View style={styles.AppBar}>
      <Text style={styles.title}>Задачи: {todos.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    height: 120,
    backgroundColor: '#e17055',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff'
  }
})

export default Header;