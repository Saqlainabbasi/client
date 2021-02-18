import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/Home';


export default function routes() {
    return (
        <div>

            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />

                </Switch>
            </Layout>
        </div>
    )
}
