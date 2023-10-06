import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cards from "../card/card";
import "./movieList.css";
function MovieList() {
    const [movieList,setMovieList]=useState([]);
    const {type}=useParams();
    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        getData();
    },[type]);
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then (res => res.json())
            .then (data => setMovieList(data.results))
    }
    return ( 
        <div className="movie__list">
            <div className="title">{(type?type:"popular").toUpperCase()}</div>
            <div className="list">
                {
                    movieList.map((movie)=>(
                        <Cards movie={movie}/>
                    ))
                }
            </div>
        </div>

    );
}

export default MovieList;