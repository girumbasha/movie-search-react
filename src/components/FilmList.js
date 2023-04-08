import React from "react";

const FilmList =(props)=> {
return  (
    
     
        <>
         {props.films.map((film,index)=> (
        <div className=" image-container col-md-4 mx-2">
            
            <img src={film.Poster}alt=""/>
            <div className="overlay d-flex align-items-center-justified-content-center">

            </div>
            </div>
           
      ))}
      
    </>
);
     


};

export default FilmList;