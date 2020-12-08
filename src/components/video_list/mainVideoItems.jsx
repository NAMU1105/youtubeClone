import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import VideoItem from "../video_item/videoItem";
import styles from "./mainVideoItems.module.css";
import * as actionTypes from "../../store/actions";

const { getVideos } = require("../../server");

function MainVideoItems(props) {
  let history = useHistory();
  let location = useLocation();
  let pathName = location.pathname;
  let pathSearch = location.search;
  const parseKeyworld = "?keyword=";

  // ** state is replaced with redux
  // const [videos, setVideos] = useState([]);

  // ****************************************
  // init page(show popular videos)
  // ****************************************
  useEffect(() => {
    const fetchData = async () => {
      const result = await getVideos();
      // console.log(result);
      // setVideos([...result]);
      props.onInitVideos(result);
    };
    fetchData();
    // // return () => {
    // //   console.log("컴포넌트가 화면에서 사라짐");
    // // };

    // props.onInitVideos();
    // console.log(props.prs);
  }, []);

  // ****************************************
  // show search result
  // ****************************************
  useEffect(() => {
    const searchword = props.onSearch;
    if (!searchword) return;
    console.log(`searchword: ${searchword}`);

    // await getVideos(searchword).then((data) => setVideos(() => [...data]));
    // const result = await getVideos(searchword);
    // setVideos([...result]);

    const fetchData = async () => {
      const result = await getVideos(searchword);
      // console.log(result);
      // setVideos([...result]);
      props.onSearchVideos(result);

      history.push("/search?keyword=" + searchword);
    };
    fetchData();
  }, [props.onSearch, history]);

  // ****************************************
  // go back to main page from search page
  // ****************************************
  useEffect(() => {
    const searchword = props.onSearch;
    pathSearch = pathSearch.split(parseKeyworld)[1];

    // console.log(`searchword: `, searchword);
    // console.log(`pathSearch: `, pathSearch);
    // console.log(`location: `, location);
    // console.log(`pathName: `, pathName);

    if (pathName === "/") {
      const fetchData = async () => {
        const result = await getVideos();
        props.onInitVideos(result);
      };
      fetchData();
      // } else if (searchword !== pathSearch) {
    } else {
      // console.log("here");
      const fetchData = async () => {
        const result = await getVideos(pathSearch);
        props.onInitVideos(result);
      };
      fetchData();
    }
    // console.log(history);
  }, [pathName, pathSearch]);

  //////////////////////
  // let initVideos = useMemo(
  //   async () =>
  //     await getVideos().then(function (response) {
  //       // handle success
  //       initVideos = response;
  //       console.log("initVideos", initVideos);
  //       return initVideos;
  //     }),
  //   [location.pathname]
  // );
  // console.log(initVideos);

  const changeVideo = ({ videoId, snippetInfo }) => {
    console.log("another vid clicked");
    // console.log(videoId);
    // console.log(snippetInfo);
    // props.changeVideo();
    props.onChangeVideo({ videoId, snippetInfo });
  };

  return (
    <ul
      // className={pathName === "/detail" ? "sideVideoItems" : "mainVideoItems"}
      className={
        pathName === "/detail" ? styles.sideContainer : styles.container
      }
    >
      {props.vids.map((item) => {
        return (
          <VideoItem
            key={item.id.videoId ? item.id.videoId : item.id}
            videoId={item.id.videoId ? item.id.videoId : item.id}
            snippet={item.snippet}
            onClicked={props.goDetail}
            onVideoChange={changeVideo}
          />
        );
      })}
      {/* </section> */}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    vids: state.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitVideos: (result) =>
      dispatch({
        type: actionTypes.INIT_VIDEOS,
        videoList: result,
      }),
    onSearchVideos: (searchResult) =>
      dispatch({
        type: actionTypes.SEARCH_VIDEOS,
        searchResultList: searchResult,
      }),
  };
};

// export default MainVideoItems;
export default connect(mapStateToProps, mapDispatchToProps)(MainVideoItems);
