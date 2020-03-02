export default (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    default: 
      return state;
  }
}