import './Content.css'
import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from './../../Views/Home';
import Contact from '../../Views/Contact';
import ShoppingCart from './../../Views/ShoppingCart';

const Content = props => {
    return (
        <div className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/shoppingcart">
                    <ShoppingCart/>
                </Route>
            </Switch>
        </div>
    )
}
export default Content