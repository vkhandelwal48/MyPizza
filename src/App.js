import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../src/containers/Orders/Orders';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/" exact component={PizzaBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
