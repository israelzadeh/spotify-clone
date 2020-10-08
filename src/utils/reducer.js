export const initialState = {
  user: null,
  playlists: {},
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_YAKUM":
      return {
        ...state,
        yakum: action.yakum,
      };
    default:
      return state;
  }
};

export default reducer;
