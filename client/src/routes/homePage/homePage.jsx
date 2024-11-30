import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Home & Get Your Dream Place</h1>
          <p>
            
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>4+</h1>
              <h2>Employer</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Total Customer</h2>
            </div>
            <div className="box">
              <h1>20+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
