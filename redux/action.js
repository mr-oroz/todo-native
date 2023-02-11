
export const AddTodoAction = (body) => {
  return {
    type: "ADD_TODO",
    payload: body
  }
}

export const deleteTodoAction = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id
  }
}
// для открывание модальное окно
export const toggleModal = (bool) => {
  return {
    type: "TOGGLE_MODAL",
    payload: bool
  }
}

export const changeTodoId = (id) => {
  return {
    type: 'TODO_ID',
    payload: id
  }
}

export const saveTodo = (body, id) => {
  return {
    type: 'SAVE_TODO',
    payload: {body, id}
  }
}