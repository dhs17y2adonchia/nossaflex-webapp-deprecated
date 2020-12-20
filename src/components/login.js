
import React from "react";
import Button from "./buttons";
import "../styles/colors.css";
import "../styles/login.css";

const app = {
	initialState: {
		email: "",
		password: "",
	},
	reducer: state => ({
        setEmail(userEmail) {
			state.email = userEmail
        },
        setPassword(userPassword) {
			state.password = userPassword
		},
	}),
}

function Login() {
    return (
        <div id="duomo-root" className="vstack space-12">
            <div className="text-64 text-color weight-900">nossaflex. db</div>
            <form className="vstack w-448 align-start space-16 border-1 border-black rounded-5 px-16 py-24 background">
                
                    <div className="vstack space-4 align-start">
                        <div className="weight-200 text-14 px-4 text-color">email.</div>
                        <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="enter email"/>
                    </div>
                    <div className="vstack space-4 align-start">
                        <div className="weight-200 text-14 px-4 text-color">password.</div>
                        <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="password"/>
                    </div>
                
            </form>
            <div className="vstack space-12 align-start  w-448">
                <Button buttonText="log in." highlightColor="red"/>
                <Button buttonText="log in with google." highlightColor="red"/>
                <div className="text-color light">Don't have an account? <u>Sign Up.</u></div>
            </div>
        </div>
	)
}

export default Login;