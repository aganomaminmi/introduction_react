import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCVnxxVmdzeq5ghb3n5BQchPHT3jz6vYJ8",
    authDomain: "takanami-react-app.firebaseapp.com",
    databaseURL: "https://takanami-react-app.firebaseio.com",
    projectId: "takanami-react-app",
    storageBucket: "takanami-react-app.appspot.com",
    messagingSenderId: "911520889118",
    appId: "1:911520889118:web:a52b2d9b033669de28310f",
    measurementId: "G-T2VFB0PTTY"
}

firebase.initializeApp(config)

class App extends Component {
    td = {
        width: "250px"
    }

    render() {
        return (
            <div>
                <h1>Fire</h1>
                <h2>Sample data.</h2>
                <Sampledata />
            </div>
        );
    }
}


export default connect()(App);



