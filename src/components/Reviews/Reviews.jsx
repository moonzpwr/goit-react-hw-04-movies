import { Component } from "react";

import movieAPI from '../../utils/movie-api';
import propTypes from 'prop-types';


export default class Reviews extends Component {
    state = {
        reviews: null
    }

    async componentDidMount() {
         movieAPI.fetchReviews(this.props.match.params.movieId).then(res => 
             this.setState({
                 reviews: res.results
             })
         )

    }

    render() {
        return (
            <ul className="reviews-container">
                {this.state.reviews !== null && this.state.reviews.length > 0 ? 
                    this.state.reviews.map(el => (
                        <li key={el.id}>
                            <h3>Author: {el.author}</h3>
                            <p className='reviewBody'>{el.content}</p>
                        </li>
                    ))
                    : <p className='reviewBody'>We dont have any reviews for this movie.</p>  
            } 

            </ul>
        )
    }
}   

Reviews.propTypes = {
     history: propTypes.object.isRequired,
     location: propTypes.object.isRequired,
     match: propTypes.object.isRequired,
     staticContent: propTypes.string
    } 