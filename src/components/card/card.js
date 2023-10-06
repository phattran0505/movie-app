import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./card.css";
function Cards({movie}) {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1500);
  }, []);
  return (
    <>
      { isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration:"none", color:"#fff" }}>
          <div className="cards">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="no-pics"
            ></img>
            <div className="cards_content">
              <div className="cards_title">{movie.original_title}</div>
              <div className="cards_time">
                {movie.release_date}
                <div className="rate">
                  {movie.vote_average}
                  <FontAwesomeIcon className="icon" icon={faStar} />
                </div>
              </div>
              <div className="decription">{movie.overview.slice(0,120)+"..."}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Cards;
