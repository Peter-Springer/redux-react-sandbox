const actionState = (state = {hello: 'yo'}, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
    return Object.assign({}, state, action.greeting)

    default:
      return state;
  }
};

export default actionState;
