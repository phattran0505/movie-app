import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movieDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function Movie() {
    const [movieDetail, setMovieDetail] = useState([]);
    const { id } = useParams();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
    };
  return (
      <div className="movie">
        <div className="movie_intro">
            <img
            className="intro_image"
            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
            alt="no-pics"
            ></img>
        </div>
        <div className="movie_content">
            <img
            className="poster_image"
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt="no-pics"
            ></img>
            <div className="main_content">
                <h1 className="movie_title">{movieDetail.title}</h1>
                <div className="movie_genres">
                    {
                      movieDetail && movieDetail.genres 
                      ?
                      movieDetail.genres.map((genre)=>(
                        <Link className="genre_name" style={{textDecoration:"none"}}>{genre.name}</Link>
                      ))
                      :
                      ""
                    }
                </div>
                <p className="tagline">{movieDetail.tagline}</p>
                <div className="vote_box">
                    <div className="vote_star">
                      {Math.floor(movieDetail.vote_average)}
                      <FontAwesomeIcon icon={faStar} className="vote-icon" />
                    </div>
                    <div className="vote_nums">
                        {"(" + movieDetail.vote_count + ") votes"}
                    </div>
                </div>
                <p className="time_movie">{movieDetail.runtime + " mins"}</p>
                <p className="time_release">{"Release date: " + movieDetail.release_date }</p>
                <div className="movie-description">{movieDetail.overview}</div>
                <div className="buttons">
                  
                  <a className="homepage_link" href={movieDetail.homepage} style={{textDecoration:"none", color:"#000"}}>
                    <span>Homepage</span>
                    <FontAwesomeIcon icon={faUpRightFromSquare}/>
                  </a>
 
                  <a className="imdb_link" href={"https://www.imdb.com/title/" + movieDetail.imdb_id  } style={{textDecoration:"none", color:"#000"}}>
                    <span>IMDB</span>
                    <FontAwesomeIcon icon={faUpRightFromSquare}/>  
                  </a>
                  
                  
                </div>
            </div>
        </div>
      </div>
  );
}

export default Movie;
