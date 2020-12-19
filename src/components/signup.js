import "@zaydek/duomo"
import React from "react";
import Button from "./buttons";
import "../styles/colors.css";
import "../styles/login.css";
import useMethods from 'use-methods';

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

function SignUp() {
    return (
        <div id="duomo-root" className="vstack background grid-color space-12">
            <div className="black text-64 text-color">nossaflex. db</div>
            <form className="vstack w-448 space-16 border-1 border-black rounded-5 py-24 background">
                    <div className="hstack">
                        <div className="vstack space-4 align-start">
                            <div className="thin text-14 px-4 text-color">first name.</div>
                            <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="enter first name"/>
                        </div>
                        <div className="vstack space-4 align-start">
                            <div className="thin text-14 px-4 text-color">last name.</div>
                            <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="enter last name"/>
                        </div>
                    </div>
                    <div className="hstack">
                        <div className="vstack space-4 align-start px-28">
                            <div className="thin text-14 px-4 text-color">email.</div>
                            <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="enter email"/>
                        </div>
                        <div className="spacer"></div>
                    </div>
                    <div className="hstack">
                        <div className="vstack space-4 align-start">
                            <div className="thin text-14 px-4 text-color">password.</div>
                            <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="enter password"/>
                        </div>
                        <div className="vstack space-4 align-start">
                            <div className="thin text-14 px-4 text-color">confirm password.</div>
                            <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="confirm password"/>
                        </div>
                    </div>
            </form>
            <div className="vstack space-12 align-start  w-448">
                <Button buttonText="log in." highlightColor="red"/>
                <Button buttonText="log in with google." highlightColor="red"/>
                <div className="text-color light">Already have an account? <u>Log in.</u></div>
            </div>
        </div>
	)
}

export default SignUp;