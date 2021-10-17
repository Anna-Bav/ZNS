import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login/Login'
import {BrowserRouter as Router} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Layout from './components/Layout';
import './index.css';


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    return ( 
        <Router>
        <Layout/>
        </Router>
    );
}

export default App;

