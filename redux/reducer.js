const defaultState = {
  todos: [
    { id: 1, title: 'Выучить React Native', completed: false },
    { id: 2, title: 'Изучать все компоненты из  React Native', completed: false },
  ],
  modalVisible: false,
  todoId: null // 1 2 3
}

export const reducer = (state = defaultState, action) => {
  const { todos } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO": {
      const newItem = {
        id: Date.now(),
        title: payload,
        completed: false
      }
      const newArr = [...todos, newItem]
      return {
        ...state,
        todos: newArr
      }
    }
    case "DELETE_TODO": {
      const newArr = todos.filter(item => item.id !== payload )
      return {
        ...state,
        todos: newArr
      }
    }
    case "TOGGLE_MODAL": {
      return {
        ...state,
        modalVisible: payload
      }
    }
    case "TODO_ID" : {
      return {
        ...state,
        todoId: payload // id
      }
    }
    case "SAVE_TODO" : {
      const newArr = todos.map(item => item.id === payload.id ? {...item, title: payload.body} : item)
      return {
        ...state,
        todos: newArr
      }
    }
    default:
      return state
  }
}