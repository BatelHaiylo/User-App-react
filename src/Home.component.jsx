import { Component } from "react";
import Register from "./Register.component";
import UserEdit from "./UserEdit.component";

export default class Home extends Component{
    constructor(props){
        super()
        this.state = {isRegistered:false}
        this.signUp = this.signUp.bind(this)
        this.signIn = this.signIn.bind(this)
    }
    signUp(){
        console.log(this.state)
        this.setState({isRegistered:true})
        return <UserEdit fName="Loolo" lName="Tomas" age="20" mail="looloT@blah.boo" password="shhh..1" />
    }
    signIn(){
        console.log(this.state)
        this.setState({isRegistered:false})
        return <Register/>
    }
    render(){
        return(
            <div>
                Home
                <button onClick={this.signUp}>sign up</button>
                <button onClick={this.signIn}>sign in</button>
                <div>{this.state.isRegistered}</div>
            </div>
        )
    }
}