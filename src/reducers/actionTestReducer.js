const actionState = (state = {}, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
    return Object.assign({}, state, { greeting: action.greeting})

    default:
      return state;
  }
};

export default actionState;
