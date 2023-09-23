export const addToDo = text => ({
  type: 'ADD_TODO',
  payload: {
    text,
  },
});

export const toggleToDo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});

export const removeToDo = id => ({
  type: 'REMOVE_TODO',
  payload: {
    id,
  },
});
