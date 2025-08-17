import MovieCard from "../components/MovieCard";

function Home(){
    const movies = [
        {id : 1, title: 'Garfield', release_date: '2020'},
        {id : 2, title: 'Avengers', release_date: '2022'},
        {id : 3, title: 'Up', release_date: '2019'},
    ]
    const handleSearch = () => {

    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movie..." 
                    className="search-input" 
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
export default Home;