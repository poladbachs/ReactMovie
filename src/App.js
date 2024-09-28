import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

export default function App() {

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <h1>App</h1>
    );
}