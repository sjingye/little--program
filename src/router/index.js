import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
const Home = lazy(() => import('../views/Home/index.jsx'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Suspense>
        
    )
}
    
export  default AppRouter;