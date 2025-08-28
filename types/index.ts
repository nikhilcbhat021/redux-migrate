export type Movie = {
    id: string;
    movieTitle: string;
    inBasket: boolean;
    liked: boolean;
    // description?: string;
    // releaseYear?: number;
    // genre?: string;
    // rating?: number;
    // posterUrl?: string;
};

export type Liked = {
    id: string,
    title: string,
}

export type Basket = {
    id: string,
    title: string,
}

export interface ReduxState {
    movies: Movie[],
    likedMovies: Liked[],
    basket: Basket[]
}

// export type actionType = {
//     type: string,
//     payload?: Movie | Liked | Basket
// }

export type actionType = 
  | { type: 'ADD_MOVIE'; payload: Movie }
  | { type: 'LIKE_MOVIE'; payload: Liked }
  | { type: 'ADD_TO_BASKET'; payload: Basket }
  | { type: 'REMOVE_MOVIE'; payload: { id: string } }
  | { type: 'CLEAR_BASKET'; payload?: undefined };