import React, {lazy, Suspense} from 'react';
import './App.css';
import LoadingScreen from "./components/LoadingScreen";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import routes from "./constants/routes";
import PageNotFound from "./pages/PageNotFound";
import TopNavigation from "./components/Header/TopNavigation";

const Home = lazy(() =>
    import('./pages/Home/Home' /* webpackChunkName: "Home" */)
);
const Contacts = lazy(() =>
    import('./pages/Contacts/Contacts' /* webpackChunkName: "Contacts" */)
);

function App() {
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <BrowserRouter>
                <TopNavigation/>
                <Switch>
                    <Route exact path={routes.home} component={Home}/>
                    <Route exact path={routes.contacts} component={Contacts}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
