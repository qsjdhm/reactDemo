/**
 * Created by a1 on 2016/5/5.
 */


import 'antd/dist/antd.css';
import '../css/page.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

import DelNotePage from './page/DelNotePage';
import EditNotePage from './page/EditNotePage';
import Index from './page/Index';



var App = React.createClass({
    render: function() {
        return this.props.children;
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute name="home" component={Index}/>
            <Route name="del"  path="/del"  component={DelNotePage}/>
            <Route name="edit" path="/edit" component={EditNotePage}/>
        </Route>
    </Router>
), document.getElementById("aaa"));




