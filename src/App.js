import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmList from "./components/FilmList";
import FilmListHeading from './components/FilmListHeading';
import Apps from './components/SearchBox';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App =()=>{
    const [film,SetFilms]= useState([]);
  //making the search dynamic with state obj
 const [searchFilm,setSearchFilm] = useState('')

    const getFilmRequest= async(searchFilm)=> {
        //make the request to the api
        const url = `http://www.omdbapi.com/?s=${searchFilm}&apikey=96a6c19a`;

         const response = await fetch(url);
         //convert the response to JSON
         
         const responseJson = await response.json();
        
         if (responseJson.Search) {
          SetFilms(responseJson.Search);
         }
         //to replace hardcoded with api data
        
    };
    //call the getFilmRequuest with useEffect hook
    //it get called with page loads
    useEffect(()=> {
        getFilmRequest(searchFilm);

    },[searchFilm]);
    
    return (
     <div className="App container-fluid film-css">
        <img src='/images/movie.jpg' width='100%' height='150px'/>
  <div className="row d-flex align-items-center mb-4">
  <FilmListHeading heading='Movie Poster Search'/>
  <Apps searchFilm ={searchFilm}setSearchFilm={setSearchFilm}/> 
  </div>
  <div className="row">
  <FilmList films={film}/>
 

  </div>
    </div>);
}
export default App