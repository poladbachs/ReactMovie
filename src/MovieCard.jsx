export default function MovieCard({ movie }) {
    const handleMovieClick = () => {
        window.open(`https://imdb.com/title/${movie.imdbID}/`);
    };

    return (
        <div className="movie" onClick={handleMovieClick}>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img
                    src={movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/400"
                    }
                    alt={movie.Title}
                />
            </div>


            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}