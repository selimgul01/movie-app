import "../CSS/navbar.css";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../slice/moviesSlice";

const Navbar = ({ setSearchTerm, searchTerm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchHandler = () => {
    dispatch(searchMovies(searchTerm));
  };
  const changehandler = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchMovies(searchTerm));
  };
  return (
    <div className="navbar-container">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        MovieWebSite
      </div>
      <div className="navbar-search">
        <input
          onChange={changehandler}
          type="text"
          placeholder="Film,yönetmen,imdb ara..."
        />
        <button onClick={searchHandler} className="search-button">
          <IoIosSearch />
        </button>
      </div>
      <div className="navbar-navigation">
        <p onClick={() => navigate("/")}>Anasayfa</p>
        <p onClick={() => navigate("favorite-movie")}>Favori Filmlerim</p>
        <p onClick={() => navigate("new-movie")}>Yeni Filmler</p>
        <p onClick={() => navigate("up-coming")}>Yakında Gelecek Filmler</p>
      </div>
    </div>
  );
};

export default Navbar;
