import * as actionTypes from "./actions";
// const { getVideos } = require("../server");

const initialState = {
  videos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //   INIT POPULAR VIDEOS
    case actionTypes.INIT_VIDEOS:
      console.log("reducer init");

      return {
        ...state,
        videos: action.videoList,
      };

    //   SEARCH VIDEOS BY KEYWORD
    case actionTypes.SEARCH_VIDEOS:
      console.log("reducer search");

      return {
        ...state,
        videos: action.searchResultList,
      };
  }
  return state;
};

export default reducer;
