import { Liked } from '@/types'
import React from 'react'

const LikedMovies = ({ likedMovies }: { likedMovies:Liked[] }) => {
    return (
        <div>
            <h2 className='text-2xl font-semibold mt-4'>Liked Movies - {likedMovies.length}</h2>
            <ul className='divide-y-1 divide-cyan-400'>
                {likedMovies.length !== 0 ?
                    likedMovies.map((movie, idx) => {
                        return <li className='p-2' key={idx}>{movie.title}</li>
                    }) : <p>No movies yet...</p>
                }
            </ul>
        </div>
    )
}

export default LikedMovies