import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import { Layout } from 'antd';
import EntryPage from './routes/EntryPage';
import CreatePage from './routes/CreatePage';
import ImportPage from './routes/ImportPage';
import EditerPage from './routes/EditerPage'

import logo from './assets/logo.png'

const { Header } = Layout

function RouterConfig({ history }) {
  return (<Layout className="page">
      <Router history={history}>
        <>
          <Header className="page-header"><Link to='/'><img src={logo} alt="Animal Studio"/></Link></Header>
          <Switch>
            <Route path="/" exact component={EntryPage} />
            <Route path="/import" exact component={ImportPage} />
            <Route path="/create" exact component={CreatePage} />
            <Route path="/editer" exact component={EditerPage} />
          </Switch>
        </>
      </Router>
    </Layout>
  );
}

export default RouterConfig;
