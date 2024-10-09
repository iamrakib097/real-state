import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";
import bg from "/bg.png";
import { AuthContext } from "../../context/AuthContext";
const Homepage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            elit nisl. Mauris eu facilisis sem. Proin auctor venenatis felis,
            eget varius tortor aliquet eu. Proin rhoncus scelerisque ligula, et
            viverra nulla commodo non. Vestibulum dignissim velit justo, non
            ornare mi egestas eget.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
