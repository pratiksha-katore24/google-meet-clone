import React from 'react';
import './App.css';
import Header from '../../component/header/header';
import Main from '../Main/Main';
import Footer from './../../component/footer/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;