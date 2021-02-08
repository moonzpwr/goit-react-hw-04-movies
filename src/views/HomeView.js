import { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

import movieAPI from '../utils/movie-api';
import routes from '../routes';


export default class HomeView extends Component {
    state = {
        movies: []
    }

    async componentDidMount() {
        movieAPI.fetchPopular().then(res => this.setState({ movies: res.results }))
    }

    render() {
        return (
            <>
                <h1>Tranding today</h1>
                <ul className="trending-container">
                    {this.state.movies.map(movie => (
                        <li key={movie.id} className="trending-item">
                            <Link to={`${routes.movies}/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                                {movie.title} ({movie.release_date.slice(0, 4)})
                            </Link>  
                        </li>
                        )
                    )}
                </ul>
            </>
        )
    }
    
}

 HomeView.propTypes = {
     history: propTypes.object.isRequired,
     location: propTypes.object.isRequired,
     match: propTypes.object.isRequired,
     staticContent: propTypes.string
    } 