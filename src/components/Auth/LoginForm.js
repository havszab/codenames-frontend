import React from "react";
import axios from "axios";
import api from "../../Config/APIconfig"

class LoginForm extends React.Component {
    state = {username: '', password: '', wrongAuthDataCombo: false};

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    };

    handleSubmit = () => {
        if (this.state.username !== '' && this.state.password !== '') {
            axios.post(api + "/api/login/" + this.state.username + "/" + this.state.password)
                .then(response => {
                    console.log(response.data);
                    this.handleLogin(response.data)
                })
        }
    };


    handleLogin = (isSuccess) => {
        let prevState = this.state;
        if (isSuccess) {
            this.exportUser(this.state.username);
        }
        prevState.wrongAuthDataCombo = isSuccess;
        this.setState({...prevState})
        console.log("login status is loginfailed: " + this.state.wrongAuthDataCombo)
    };

    exportUser = (username) => {
        axios.get(api + "/api/get-user/" + username)
            .then(response => {
                console.log(response.data)
            })
    };


    render() {

        let onFailContent = this.state.wrongAuthDataCombo ? <div>Login</div> : <div>Login Failed</div>;

        return (
            <div>
                <div className="input">
                    <input
                        name="username"
                        type="username"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder={"username"}/>
                </div>

                <div className="input">
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder={"password"}
                        required
                    />
                </div>

                <button onClick={this.handleSubmit} type="submit" className="btn-login">
                    Submit
                </button>
                {onFailContent}
            </div>
        );
    }
}


export default LoginForm;
