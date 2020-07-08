import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import DialoguesStateful from "./components/Dialogues/DialoguesStateful";
import HeaderStateful from "./components/Header/Header";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import ProfileStateful from "./components/Profile/ProfileStateful";
import UsersStateful from "./components/Users/UsersStateful";
import { initializeApp } from "../src/redux/app-reducer";
import { compose } from "redux";



class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <img src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' />
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderStateful />
                <NavBar />
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =>
                        <DialoguesStateful />} />
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileStateful />} />
                    <Route path='/users' render={() =>
                        <UsersStateful />} />
                    <Route path='/login' render={() =>
                        <Login />} />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, { initializeApp }))(App)
