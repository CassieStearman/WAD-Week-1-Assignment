import React from "react";
import SubmitButton from "./submit-button";


// contain username and password input fields
//an h3 that says Log In
//and a border

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container card border-primary mb-3 w-25">
                <div className="card-body">
                    <div className="card-header">
                        <h3>Log In</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <label>                                
                                <input type="text" name="username" placeholder="Username" />
                            </label>
                            <label>                                
                                <input type="text" name="password" placeholder="Password" />
                            </label>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}