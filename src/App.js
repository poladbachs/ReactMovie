import { useEffect } from 'react';

import './App.css';

import SearchIcon from './assets/search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

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
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}