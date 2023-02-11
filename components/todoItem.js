import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeTodoId, deleteTodoAction, toggleModal } from '../redux/action';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const ondeleteTodo = () => {
    dispatch(deleteTodoAction(id)) // удалить
  }

  const handlePress = () => {
    dispatch(toggleModal(true)) // открыть модал окно
    dispatch(changeTodoId(id)) // меняет туду айди 
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={ondeleteTodo}
      style={styles.todo}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    marginVertical: 6
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
  }
})


export default TodoItem;