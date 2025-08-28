import { createStore } from "redux";
import { Basket, Liked, Movie, ReduxState, actionType } from '@/types/index';

const initialState: ReduxState = {
    movies: [
        {id: 'The Terminator', inBasket: false, liked: true, movieTitle: 'The Terminator'},
        {id: 'Big Hero 6', inBasket: false, liked: false, movieTitle: 'Big Hero 6'},
        {id: 'Bahubali: The Beginning', inBasket: false, liked: false, movieTitle: 'Bahubali: The Beginning'}
    ],
    likedMovies: [],
    basket: []
}

function reducer(state:ReduxState = initialState, action:actionType):ReduxState {

    switch(action.type) {
        case "ADD_MOVIE": 
            return {
                ...state,
                movies: [...state.movies, action.payload as Movie]
            }

        case "ADD_TO_BASKET": 
            // find the index where this movie is added in movies arr.
            const basket_movie = state.movies.findIndex(({id}) => id===action.payload.id);

            // create a draft state, in here, 
            // if movie is in basket, we filter it out from the basket array.
            // if movie is not in basket, we add to the basket array.
            return {
                ...state,
                basket: state.movies[basket_movie].inBasket ?
                    state.basket.filter((movie) => { return movie.id !== action.payload.id }) :
                    [...state.basket, action.payload as Basket] ,
                // Since we maintain the 'basket' status in 'movies' slice also,
                // we need to switch the inBasket status... i.e if its inBasket, remove it and vice-versa.
                movies: state.movies.map((movie) => {
                    return movie.id == action.payload.id ?
                        {...movie, inBasket: !movie.inBasket} : movie
                })
            }

        case "LIKE_MOVIE": 
            // find the index where this movie is added in movies arr.
            const movie_liked = state.movies.findIndex(({id}) => id===action.payload.id);

            // create a draft state, in here, 
            // if movie is not liked, we add to the likedMovies array.
            // if movie is liked, we filter it out from the likedMovies array.
            return {
                ...state,
                likedMovies: state.movies[movie_liked].liked ?
                    state.likedMovies.filter((movie) => { return movie.id !== action.payload.id }) :
                    [...state.likedMovies, action.payload as Liked] ,
                movies: state.movies.map((movie) => {
                    return movie.id == action.payload.id ?
                        {...movie, liked: !movie.liked} : movie
                })
            }
        
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;