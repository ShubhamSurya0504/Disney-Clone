import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../features/movies/MovieSlice";
import { selectUserName } from "../features/user/userSlice";
import movieArray from "../movies.json";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let trendings = [];
    let originals = [];
    movieArray.map((doc) => {
      switch (doc.type) {
        case "recommend":
          recommends = [...recommends, { ...doc }];
          break;
        case "new":
          newDisneys = [...newDisneys, { ...doc }];
          break;
        case "trending":
          trendings = [...trendings, { ...doc }];
          break;
        case "original":
          originals = [...originals, { ...doc }];
          break;
      }
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        trending: trendings,
        original: originals,
      })
    );
  }, [userName]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc (100vh - 250px);
  //   height:100vh;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
