import { useEffect } from 'react';

import './App.css';

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
        <h1>App</h1>
    );
}