import { View, Modal, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, saveTodo } from '../redux/action';
import MyButton from './ui/my-button';

const EditModal = ({ title, id }) => {
  const { modalVisible } = useSelector(state => state);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      setText(title)
    }
  }, [title])

  const handlePress = () => {
    dispatch(saveTodo(text, id))
    dispatch(toggleModal(false))
  }

  return (
    <View style={styles.modal}>
      <Modal
        visible={modalVisible}
        animationType="slide">
        <View style={styles.modal}>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text} />
          </View>
          <View style={styles.btns}>
            <MyButton
              onPress={() => dispatch(toggleModal(false))}>
              Закрыть
            </MyButton>
            <MyButton
              color='#2ed573'
              onPress={handlePress}>
              Сохранить
            </MyButton>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 5,
  },
  input: {
    padding: 10,
    borderBottomColor: '#222',
    borderBottomWidth: 2,
    width: '80%'
  },
  btns: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  }
})

export default EditModal;