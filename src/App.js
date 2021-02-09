import { Route, Switch, Redirect } from "react-router-dom";
import { Suspense, lazy } from 'react'; 
  
import routes from './routes';

const Navigation = lazy(() => import('./components/Navigation/Navigation' /* webpackChunkName: "navigation" */));
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-viev" */));
const MoviesView = lazy(() => import('./views/MoviesView' /* webpackChunkName: "movies-viev" */));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */));




function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Navigation/>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movies} exact component={MoviesView} />
        <Route path={routes.MovieDetails} component={MovieDetailsView} />
        <Redirect to={routes.home}  />
        </Switch>
        </Suspense>
    </>
  );
}

export default App;


