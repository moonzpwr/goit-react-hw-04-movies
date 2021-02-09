import { NavLink, Route } from 'react-router-dom';

export default function AdditionalInformation({ from , url }) {
    return(
        <div className='additionalInfo'>
                    <p>Additional information</p>
                        <ul>
                            <li><NavLink to={{
                                pathname: `${url}/cast`,
                                state: { from } 
                            }}>Cast</NavLink></li>
                            <li><NavLink to={{
                                pathname: `${url}/reviews`,
                                state: { from } }
                            }>Reviews</NavLink></li>
                        </ul>
        </div>
    )
}