import React from "react";

const SearchBox =(props)=> {
    return (



 <div className=" search-buttom col col-sm-4">
            
        <input className=" form-control"
        
        placeholder='search films...'
        value={props.value}
        onChange={(event)=>props.setSearchFilm(event.target.value)
     }
 
    
 
 />
       
         </div>
)}
export default SearchBox;
