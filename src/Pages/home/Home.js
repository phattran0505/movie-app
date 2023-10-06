import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../../components/movieList/movieList";
function Home() {

    const [popularMovies, setPopularMovies]=useState([]);

    useEffect (()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then (res => res.json())
            .then (data => setPopularMovies(data.results))
    },[])
    return ( 
        <>
            <div className="poster">
                <Carousel 
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                {
                    popularMovies.map(movie=>(
                        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}} className="slide">
                            <div className="poster-image">
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="no-pics"/>
                            </div>
                            <div className="poster-content">
                                <div className="poster-title">
                                    {movie.original_title}
                                </div>
                                <div className="poster-time">
                                    {movie.release_date}
                                    <div className="rate">
                                        {movie.vote_average}
                                        <FontAwesomeIcon className="icon" icon={faStar} />
                                    </div>
                                </div>
                                <div className="descripe">{movie.overview}</div>
                            </div>
                        </Link>
                    ))

                }
                </Carousel>
            </div>
            <MovieList/>
        </>

    );
}

export default Home;