import { Component } from "react";

export default class UserEdit extends Component{
    constructor(props){
        super()
        this.state = {
            fName:props.fName,
            lName:props.lName,
            age:props.age,
            mail:props.mail,
            password:props.password,
            message:""
        }
    }
    updateUserFName(e){
        this.setState({fName:e.target.value})
    }
    updateUserLName(e){
        this.setState({lName:e.target.value})
    }
    updateUserAge(e){
        this.setState({age:e.target.value})
    }
    updateUserMail(e){
        this.setState({mail:e.target.value})
    }
    updateUserPassword(e){
        this.setState({password:e.target.value})
    }
    formSubmit(e){
        e.preventDeafult()
        this.state.fName == this.props.fName ? this.setState({message:"please fill this"}) : this.setState({message:""})
        this.state.lName == this.props.lName ? this.setState({message:"please fill this"}) : this.setState({message:""})
        this.state.age == this.props.age ? this.setState({message:"please fill this"}) : this.setState({message:""})
        this.state.mail == this.props.mail ? this.setState({message:"please fill this"}) : this.setState({message:""})
        this.state.password == this.props.password ? this.setState({message:"please fill this"}) : this.setState({message:""})
    }
    render(){
        return(
            <form onSubmit={(e)=>this.formSubmit(e)}>
                <h1>UPDATE USER DATA</h1>
                enter your first name:
                <input type="text" value={this.state.fName} onChange={(e)=>{this.updateUserFName(e)}}/>
                <p>{this.state.message}</p>
                enter your last name:
                <input type="text" value={this.state.lName} onChange={(e)=>{this.updateUserLName(e)}}/>
                <p>{this.state.message}</p>
                enter your age:
                <input type="number" value={this.state.age} onChange={(e)=>{this.updateUserAge(e)}}/>
                <p>{this.state.message}</p>
                enter your mail:
                <input type="email" value={this.state.mail} onChange={(e)=>{this.updateUserMail(e)}}/>
                <p>{this.state.message}</p>
                enter your password:
                <input type="password" value={this.state.password} onChange={(e)=>{this.updateUserPassword(e)}}/>
                <p>{this.state.message}</p>
                <button>UPDATE</button>
            </form>
            
        )
    }
}