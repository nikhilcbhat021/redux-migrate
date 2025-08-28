'use client'
import { Movie, Liked, Basket } from '@/types/index';

interface IMovie {
    movies: Movie[], 
    handleLikeMovieCb:(movieTitle:string)=>void, 
    handleAddToBasketCb:(movieTitle:string)=>void
}

const Movies = ({movies, handleLikeMovieCb, handleAddToBasketCb}: IMovie) => {

    return (
        <>
            <h2 className='text-2xl font-semibold'>Movies List</h2>
            <ul className='divide-y-1 divide-cyan-400'>
                { movies.length !==0 ?
                    movies.map(({movieTitle, id, inBasket, liked}) => {
                        return <li className='p-2 min-w-120 max-w-fit flex justify-between items-center' key={id}>
                            <div>{movieTitle}</div>
                            <div className="">
                                <button 
                                    className="p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer mr-2"
                                    onClick={() => handleLikeMovieCb(movieTitle)}
                                >
                                    {liked ? "Unlike" : "Like"}
                                </button>
                                <button 
                                    className='p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer'
                                    onClick={() => handleAddToBasketCb(movieTitle)}
                                >
                                    {inBasket ? "Remove from Basket" : "Add to Basket"}
                                </button>
                            </div>
                        </li>
                    }) : <p>No movies yet...</p>
                }
            </ul>
        </>
    )
}

export default Movies;