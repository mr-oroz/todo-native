import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header';
import AddTodo from '../components/addTodo';
import List from '../components/list';
import EditModal from '../components/editTodo';
import { useSelector } from 'react-redux';
const Main = () => {
  const { todos, todoId } = useSelector(state => state);
  const todoItem = todos.find(item => item.id === todoId) // {} object

  return (
    <View style={styles.main}>
      <Header />
      <AddTodo />
      <List />
      <EditModal
        id={todoItem && todoItem.id}
        title={todoItem && todoItem.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})

export default Main;