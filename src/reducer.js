export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//  token: "BQDAClNiUIfO7t--p3mzXxDDiBU1QQFpqgVMWSGxzAi86RzorTwE_2-AOuhjXvyidgZ-b4akNIWp7TYAh9ThbWEOZthdYdez2F-lLFIwb6WxhDUeqPtyPWUs7BB0veY9jU8_bCbDhGO6PR4Ry262pH6VuVDz92dDwZCQHA4XxqpAgqrtJhGP",
};

const reducer = (state, action) => {
  console.log(action);

    switch(action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        };

         case 'SET_TOKEN':
         return {
           ...state,
           token: action.token,
         };

         case 'SET_PLAYLISTS':
          return {
            ...state,
            playlists: action.playlists,
          };

          case 'SET_DISCOVER_WEEKLY':
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            }

        default:
          return state;
    }
}

export default reducer;
