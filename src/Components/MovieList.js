import MovieCard from "./MovieCard";

function MovieList({movies,search, rating}) {
    return (
<div class="cont"  >  
    
            {movies.filter(el=>  el.title.toUpperCase().includes(search.toUpperCase())
            && el.rate>=rating).map((el)=> <MovieCard el={el} /> )}
</div>

    )
}
export default MovieList; 