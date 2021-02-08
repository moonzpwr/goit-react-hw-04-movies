const KEY = 'b2a0413a5f66c605e8bb3573c046dd7a'

function fetchMovieDetails(movieId) {
return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`).then(res => res.json())
}

function fetchWithSearchQuery(seachQuery) {
 return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${seachQuery}`).then(res => res.json()).then(res => res.results)
}

function fetchPopular() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`).then(res => res.json())
}

function fetchCast(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`).then(res => res.json())
}

function fetchReviews(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`).then(res => res.json())
}

export default {fetchMovieDetails, fetchWithSearchQuery, fetchPopular, fetchCast, fetchReviews}