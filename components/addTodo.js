import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { AddTodoAction } from '../redux/action';
import { Entypo } from '@expo/vector-icons';
import MyButton from './ui/my-button';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (value) {
      dispatch(AddTodoAction(value))
      setValue('')
    } else {
      Alert.alert('error')
    }
  }
  return (
    <View style={styles.form}>
      <TextInput
        keyboardType='default'
        onSubmitEditing={handleClick}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder='напиши задачу' />
      <MyButton color="#706fd3" onPress={handleClick}>
        <Entypo
          name="add-to-list"
          size={24}
          color="#fff" />
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginVertical: 10
  },
  input: {
    borderBottomWidth: 2,
    width: '70%',
    borderBottomColor: '#222'
  },
})

export default AddTodo;