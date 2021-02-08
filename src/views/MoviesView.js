import { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import  { Suspense, lazy } from 'react';

import movieAPI from '../utils/movie-api';

const SearchBar = lazy(() => import('../components/SearchBar/SearchBar' /* webpackChunkName: "search-bar" */))


export default class MoviesViev extends Component {
    state = {
        movies: null,
       
    }
    
    componentDidMount() {
        const nextParams = new URLSearchParams(this.props.location.search).get('query');
        if (nextParams) {
            movieAPI.fetchWithSearchQuery(nextParams).then(res => this.setState({ movies: res })) 
        }
    }
   
    componentDidUpdate(prevProps, prevState) {
        const prevParams = new URLSearchParams(prevProps.location.search).get('query');
        const nextParams = new URLSearchParams(this.props.location.search).get('query');

        if (prevParams !== nextParams) {
            movieAPI.fetchWithSearchQuery(nextParams).then(res => this.setState({ movies: res })) 
        }
    }

    handleChangeQuery = (query) => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
        })
    }

    
    render() {
        const {movies} = this.state
        return (
            <>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <SearchBar onSubmit={this.handleChangeQuery} />
                </Suspense>

                {movies  && 
                    <ul className="search-container">
                        {movies.map(el => (
                            <li className="search-item" key={el.id}>
                                <img src={el.poster_path ?
                                    `https://image.tmdb.org/t/p/w200${el.poster_path}` :
                                    "http://dummyimage.com/200x300/99cccc.gif&text=No+picture"}
                                />
                                <Link to={{
                                    pathname: `${this.props.match.url}/${el.id}`,
                                    state: {from: this.props.location},
                                }}>{el.title}</Link>
                            </li>
                        ))}
                
                    </ul>
                }
            </>
        )
    }
    
}

 MoviesViev.propTypes = {
     history: propTypes.object.isRequired,
     location: propTypes.object.isRequired,
     match: propTypes.object.isRequired,
     staticContent: propTypes.string
    } 