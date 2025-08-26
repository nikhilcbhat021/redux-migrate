'use client'

const Movies = ({movies, handleLikeMovieCb, handleAddToBasketCb}) => {

    return (
        <>
            <h2 className='text-2xl font-semibold'>Movies List</h2>
            <ul className='divide-y-1 divide-cyan-400'>
                { movies.length !==0 ?
                    movies.map((movie, idx) => {
                        return <li className='p-2 min-w-120 max-w-fit flex justify-between items-center' key={idx}>
                            <div>{movie}</div>
                            <div className="">
                                <button 
                                    className="p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer mr-2"
                                    onClick={() => handleLikeMovieCb(movie)}
                                >
                                    Like
                                </button>
                                <button 
                                    className='p-2 bg-slate-300 border-1 border-gray-400 rounded hover:bg-slate-400 hover:cursor-pointer'
                                    onClick={() => handleAddToBasketCb(movie)}
                                >
                                    Add to Basket
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