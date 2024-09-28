import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=631507fc';

const App = () => {

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
    }

    useEffect(() => {

    }, [])

    return (
        <h1>App</h1>
    );
}

export default App;