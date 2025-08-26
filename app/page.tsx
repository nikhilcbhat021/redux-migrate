'use client'

import LikedMovies from '@/components/LikedMovies';
import Movies from '@/components/Movies';
import MoviesBasket from '@/components/MoviesBasket';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [movieTitle, setMovieTitle] = useState('');
    
    const movies = useSelector(state => state.movies)
    const basket = useSelector(state => state.basket)
    const likedMovies = useSelector(state => state.likedMovies)

    useEffect(() => {
        console.log(movies);
        console.log(basket);
        console.log(likedMovies);
    }, [movies, basket, likedMovies])

    function handleAddMovie() {
        dispatch({type: 'ADD_MOVIE', payload: movieTitle})
        setMovieTitle('');
        inputRef.current?.focus()
    }

    const handleAddToBasket = (movieName) => {
        dispatch({type: 'ADD_TO_BASKET', payload: movieName})
    }

    const handleLikeMovie = (movieName) => {
        dispatch({type: 'LIKE_MOVIE', payload: movieName})
    }

    return (
        <div className='m-auto p-8 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold'>Add your Favourite movie</h1>
            <div className='flex gap-2'>
                <input ref={inputRef} className='border-1 border-gray-300 rounded p-2' type="text" name='addMovie' id='addMovie' placeholder='Add movie title'
                    value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
                <button className='p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer' onClick={handleAddMovie}>Add Movie</button>
            </div>
            <div>
                <Movies movies={movies} handleLikeMovieCb={handleLikeMovie} handleAddToBasketCb={handleAddToBasket}/>
                <MoviesBasket basket={basket}/>
                <LikedMovies likedMovies={likedMovies}/>
            </div>
        </div>
    );
}
