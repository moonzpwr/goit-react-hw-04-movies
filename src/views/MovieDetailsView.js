import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import propTypes from 'prop-types';

import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

import routes from '../routes';
import movieAPI from '../utils/movie-api';


export default class MoviesDetailsViev extends Component {
    state = {
        title: null,
        poster_path: null,
        vote_average: null,
        overview: null,
        genres: null,
        release_date: ''
    }

    componentDidMount() {
    movieAPI.fetchMovieDetails(this.props.match.params.movieId).then(res => this.setState({...res}))
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        if (state && state.from) {
            return this.props.history.push(state.from)
        }
        this.props.history.push(routes.home)
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.handleGoBack} className='back-btn'>Go back</button>
                <div className='singleMovie-container'>
                    
                    <img src={this.state.poster_path ?
                        `https://image.tmdb.org/t/p/w300${this.state.poster_path}` :
                        "http://dummyimage.com/300x400/99cccc.gif&text=No+picture"} className='singleMovie-img'
                    />
                    <div>
                        <h1>{this.state.title} ({this.state.release_date.slice(0, 4)})</h1>
                        <p>User Score: {this.state.vote_average * 10}%</p>
                        <h3>Owerview</h3>
                        <p>{this.state.overview}</p>
                        <h3>Genres</h3>
                        <ul>
                            {this.state.genres !== null && 
                                this.state.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                                ))
                            }
                            </ul>
                    </div>
                </div>
                <div className='additionalInfo'>
                <p>Additional information</p>
                    <ul>
                        <li><NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink></li>
                        <li><NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink></li>
                    </ul>
                </div>
                <Route path={`${this.props.match.path}/cast`} component={Cast} />
                <Route path={`${this.props.match.path}/reviews`}  component={Reviews}/>
            </>
        )
    }
    
}

 MoviesDetailsViev.propTypes = {
     history: propTypes.object.isRequired,
     location: propTypes.object.isRequired,
     match: propTypes.object.isRequired,
     staticContent: propTypes.string
    } 