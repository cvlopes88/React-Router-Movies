import React, { useState } from 'react';
import { Route, Router } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
// import Movies from "./Movies";
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
// const item = Movies.find(item => props.match.param.id === `${movie.id}`)
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
 
  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" 
      render={props => (<Movie {...props} />) } />
          
      </div>
     
    </div>
  );
};

export default App;
