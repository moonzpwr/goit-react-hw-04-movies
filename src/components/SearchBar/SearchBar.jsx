import { Component } from 'react';
import propTypes from 'prop-types';

export default class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.inputValue === "") { 
            return;
        }
        this.props.onSubmit(this.state.inputValue)
        this.setState({inputValue: ''})
        
        
    }

    render() {

        return (
                <form onSubmit={this.handleSubmit} className='search-container'>
                <input
                    type="text"
                    placeholder="Search movies"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />

                <button type="submit">
                    Search
                </button>
        </form>
      
    )   
    }
    
}


     SearchBar.propTypes = {
        onSubmit: propTypes.func
    } 