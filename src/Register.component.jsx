import { Component } from "react";
import {GetDataAsTable} from "./User.componant"
import React, { useState, useEffect } from 'react'

export default class Register extends Component{
    constructor(props){
        super()
        this.state = { fName:"",
                       lName:"",
                       age:"",
                       mail:"",
                       password:"",
                       verifyPassword:"",
                       messagep1:"",
                       messagep2:""
                }
    }

    getNewUserFirstName(e){
        this.setState({fName:e.target.value})
    }
    getNewUserLastName(e){
        this.setState({lName:e.target.value})
    }
    getNewUserAge(e){
        this.setState({age:e.target.value})
    }
    getNewUserMail(e){
        this.setState({mail:e.target.value})
    }
    getNewUserPassword(e){
        this.setState({password:e.target.value})
    }
    getNewUserVerefiedPassword(e){
        this.setState({verifyPassword:e.target.value})
        this.state.password !== this.state.verifyPassword && this.state.password.length < this.state.verifyPassword.length ? this.setState({messagep2: "Eror, passwords dont match"}) : this.setState({messagep2: ""})
    }
    displayOnFormSubmit(e){
        e.preventDefault()
        this.state.password == "" ? this.setState({messagep1: "please fill a password"}) :this.setState({messagep1: ""} )
        this.state.password !== this.state.verifyPassword ? this.setState({messagep2: "Eror, passwords dont match"}) : this.setState({messagep2: "you got this, passwords do match"})

    }

    render(){
        return(
            <form onSubmit={(e)=>{this.displayOnFormSubmit(e)}} class="border border-secondary text-bg-light p-3">
                <p>enter your first name:</p>
                <input type="text" value={this.state.fName} onChange={(e)=>{this.getNewUserFirstName(e)}}/>
                <p>enter your last name:</p>
                <input type="text" value={this.state.lName} onChange={(e)=>{this.getNewUserLastName(e)}}/>
                <p>enter your age:</p>
                <input type="number" value={this.state.age} onChange={(e)=>{this.getNewUserAge(e)}}/>
                <p>enter your mail:</p>
                <input type="email" value={this.state.mail} onChange={(e)=>{this.getNewUserMail(e)}}/>
                <p>enter a password:</p>
                <input type="password" value={this.state.password} onChange={(e)=>{this.getNewUserPassword(e)}}/>
                <p class="fs-6 fst-italic">{this.state.messagep1}</p>
                <p>verify your password:</p>
                <input type="password" value={this.state.verifyPassword} onChange={(e)=>{this.getNewUserVerefiedPassword(e)}}/>
                <p class="fs-6 fst-italic">{this.state.messagep2}</p>
                <GetDataAsTable obj={this.state}/>
                <button>submit</button>
            </form>
        )
    }
}