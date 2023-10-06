import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./Pages/home/Home";
import MovieList from "./components/movieList/movieList";
import Movie from "./Pages/movieDetail/movieDetail";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="movies/:type" element={<MovieList />}/>
        <Route path="/profile" element={<h1>profile page</h1>}/>
        <Route path="/footer" element={<h1>footer page</h1>}/>
        <Route path="/*" element={<h1>error page</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

