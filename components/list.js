import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';
const List = () => {
  const {todos} = useSelector(state => state);
  
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => <TodoItem {...item}/>}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    flex: 1
  }
})
export default List;