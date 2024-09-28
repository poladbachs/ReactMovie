import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './assets/search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const movieKeywords = [
        'Batman', 'Superman', 'Avengers', 'X-Men', 'Harry Potter',
        'Star Wars', 'Spider-Man', 'Iron Man', 'Matrix',
        'Lord of the Rings', 'Jurassic Park', 'Pirates of the Caribbean', 'The Hobbit',
        'Shrek', 'Toy Story', 'Indiana Jones', 'Transformers', 'Fast and Furious',
        'James Bond', 'The Godfather', 'John Wick', 'Supernatural', 'Boys'
    ];

    const getRandomKeyword = () => {
        const randomIndex = Math.floor(Math.random() * movieKeywords.length);
        return movieKeywords[randomIndex];
    };

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search || []);
        setSearchTerm('');

        localStorage.setItem('lastSearchTerm', title);
        sessionStorage.setItem('hasLoadedOnce', 'true');
    };

    useEffect(() => {
        const lastSearchTerm = localStorage.getItem('lastSearchTerm');
        const hasLoadedOnce = sessionStorage.getItem('hasLoadedOnce');

        if (hasLoadedOnce) {
            if (lastSearchTerm) {
                searchMovies(lastSearchTerm);
            } else {
                const randomKeyword = getRandomKeyword();
                searchMovies(randomKeyword);
            }
        } else {
            const randomKeyword = getRandomKeyword();
            searchMovies(randomKeyword);
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
            setSearchTerm('');
        }
    };

    return (
        <div className='app'>
            <h1>React Movie</h1>

            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
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