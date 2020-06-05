import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Shop from './Shop/shop'
import Cart from './Cart/cart'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <Shop/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default App;
