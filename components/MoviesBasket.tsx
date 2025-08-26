'use client'

const MoviesBasket = ({ basket }) => {
    return (
        <div>
            <h2 className='text-2xl font-semibold mt-4'>Movies Basket - {basket.length}</h2>
            <ul className='divide-y-1 divide-cyan-400'>
                {basket.length !== 0 ?
                    basket.map((movie, idx) => {
                        return <li className='p-2' key={idx}>{movie}</li>
                    }) : <p>No movies yet...</p>
                }
            </ul>
        </div>
    )
}

export default MoviesBasket