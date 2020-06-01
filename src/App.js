import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import DialoguesStateful from "./components/Dialogues/DialoguesStateful";
import UsersStateful from "./components/Users/UsersStateful";
import ProfileStateful from "./components/Profile/ProfileStateful";


const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <Header />
            <NavBar />
            <div className={'app-wrapper-content'}>
                <Route path={'/messages'} render={() =>
                    <DialoguesStateful store={props.store} />} />
                <Route path={'/profile'} render={() =>
                    <ProfileStateful store={props.store} />} />
                <Route path={'/users'} render={() =>
                    <UsersStateful store={props.store} />} />
            </div>

        </div>
    );
}


export default App;
