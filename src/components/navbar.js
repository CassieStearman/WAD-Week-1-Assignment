import React from "react";

//Create a Navigation component that contains links styled like a navbar
//The links don’t have to go anywhere

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="container navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Web App Design Assignment Week 1</a>           
                <div className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}