const initialState = {
  username: null,
  token: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/auth":
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token
      }
    default: {
      return state;
    }
  }
}