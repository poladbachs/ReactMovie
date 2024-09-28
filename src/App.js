import { useEffect } from 'react';

import './App.css';

import SearchIcon from './assets/search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

export default function App() {

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        console.log(data.Search);
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

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img
                            src={movie1.Poster !== "N/A"
                                ? movie1.Poster
                                : "https://via.placeholder.com/400"
                            }
                            alt={movie1.Title}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}