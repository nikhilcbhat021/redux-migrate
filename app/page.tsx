'use client'

import LikedMovies from '@/components/LikedMovies';
import Movies from '@/components/Movies';
import MoviesBasket from '@/components/MoviesBasket';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionType, ReduxState } from '@/types/index';

export default function Home() {

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [movieTitle, setMovieTitle] = useState('');

    const movies = useSelector((state:ReduxState) => state.movies)
    const basket = useSelector((state:ReduxState) => state.basket)
    const likedMovies = useSelector((state:ReduxState) => state.likedMovies)

    useEffect(() => {
        console.log(movies); console.log(basket); console.log(likedMovies);
    }, [movies, basket, likedMovies])

    function handleAddMovie() {
        // Here, I need to check if the movies is already a part of the Movies list in the store, and only if so, add it to the list.
        // Can I do this in the reducer? or I need to do it in the UI Component (here)... ?? 
        if (movies.find(({id}) => id === movieTitle) ) {
            alert(`Movie - ${movieTitle} already added...`);
        } else {
            const dispatchRet = dispatch<actionType>({type: 'ADD_MOVIE', payload: {id: movieTitle, movieTitle: movieTitle, basket: false, liked:false}})
            console.log(dispatchRet);
        }
        setMovieTitle('');
        inputRef.current?.focus()
    }

    const handleAddToBasket = (movieName:string) => {
        // Update payload type... also include id
        const payload = {title: movieName, id: movieName}
        dispatch<actionType>({type: 'ADD_TO_BASKET', payload})
    }

    const handleLikeMovie = (movieName:string) => {
        const payload = {title: movieName, id: movieName}
        dispatch<actionType>({type: 'LIKE_MOVIE', payload})
    }

    return (
        <div className='m-auto p-8 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold'>Add your Favourite movie</h1>
            <div className='flex gap-2'>
                <input ref={inputRef} className='border-1 border-gray-300 rounded p-2' type="text" name='addMovie' id='addMovie' placeholder='Add movie title'
                    value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
                <button className='p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer' 
                    onClick={handleAddMovie}
                >
                    Add Movie
                </button>
            </div>
            <div>
                <Movies movies={movies}
                    handleLikeMovieCb={handleLikeMovie}
                    handleAddToBasketCb={handleAddToBasket}
                />
                <MoviesBasket basket={basket} />
                <LikedMovies likedMovies={likedMovies} />
            </div>
        </div>
    );
}
