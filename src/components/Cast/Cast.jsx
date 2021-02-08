import { Component } from "react";

import movieAPI from '../../utils/movie-api';
import propTypes from 'prop-types';

export default class Cast extends Component {
    state = {
       cast: null 
    }

    componentDidMount() {
        movieAPI.fetchCast(this.props.match.params.movieId).then(res => this.setState({ cast: res.cast }))
        
    }

    render() {
        return (
            <ul className="cast-container">
                {this.state.cast !== null &&
                    this.state.cast.map(el => (
                        <li key={el.id} className="castItem">
                            <img src={ el.profile_path ?
                                `https://image.tmdb.org/t/p/w200${el.profile_path}` :
                                "http://dummyimage.com/200x300/99cccc.gif&text=No+photo"
                            } alt={el.original_name} />
                            <div>
                                <p>{el.original_name}</p>
                                <p>Character: {el.character ? el.character : 'unknown'}</p>
                            </div>
                        </li>
                    )) 
                }
            </ul>
        )      
    }
}   

 Cast.propTypes = {
     history: propTypes.object.isRequired,
     location: propTypes.object.isRequired,
     match: propTypes.object.isRequired,
     staticContent: propTypes.string
    } 