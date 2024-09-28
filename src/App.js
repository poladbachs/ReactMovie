import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';

import SearchIcon from './assets/search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

export default function App() {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, [])

    return (
        <div className='app'>
            <h1>React Movie</h1>

            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value="Batman"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>
            
            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}