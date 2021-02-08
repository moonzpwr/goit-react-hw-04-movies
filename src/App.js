import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from 'react'; 
  
import routes from './routes';

// import Navigation from './components/Navigation/Navigation'
const Navigation = lazy(() => import('./components/Navigation/Navigation' /* webpackChunkName: "navigation" */));
// import HomeView from './views/HomeView'
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-viev" */));
// import MoviesView from './views/MoviesView'
const MoviesView = lazy(() => import('./views/MoviesView' /* webpackChunkName: "movies-viev" */));
// import MovieDetailsView from './views/MovieDetailsView'
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */));




function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Navigation/>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movies} exact component={MoviesView} />
        <Route path={routes.MovieDetails} component={MovieDetailsView}></Route>
        <Route component={HomeView}/>
        </Switch>
        </Suspense>
    </>
  );
}

export default App;


