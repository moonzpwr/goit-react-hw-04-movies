import { Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation/Navigation'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'
import MovieDetailsView from './views/MovieDetailsView'

import routes from './routes'

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movies} exact component={MoviesView} />
        <Route path={routes.MovieDetails} component={MovieDetailsView}></Route>
        <Route component={HomeView}/>
      </Switch>
    </>
  );
}

export default App;


