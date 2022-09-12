import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Discover from './pages/discoveries';
import Home from './pages';
import './styles/globals.css'
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-link"
          >
            <ul>
              <li>
                <Link to="/discoveries">Discover</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </Header>
        
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/discoveries" element={<Discover />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
