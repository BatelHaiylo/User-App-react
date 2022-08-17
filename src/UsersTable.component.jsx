import { Component } from "react";

export default class UsersTable extends Component{
    constructor(props){
        super()
        this.state = [
            {
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
            },
            {
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
            },
            {
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
            },
            {
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
            },
            {
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
            },
        ]
        this.updateUserState = this.updateUserState.bind(this)
    }
    setInputState(key, e) {
        switch(key) {
            case "fName":
                this.state.fName = e.target.value;
                break;
            case "lName":
                this.state.lName = e.target.value;
                break;
            case "age":
                this.state.age = e.target.value;
                break;
            case "mail":
                this.state.mail = e.target.value;
                break;
            case "password":
                this.state.password = e.target.value;
                break;
            default:
                console.log("eror in key");
                break;
        }
    }
    updateUserState(index) {
        let isUpdated = false;
        for (let key in this.state[index]){
          let userInput = document.getElementById(index);
          if (userInput.value != this.state[index].key){
            this.state[index].key = userInput.value
            userInput.style.color = "red";
            isUpdated = true;
          }
        }
        this.setState({});
        if (isUpdated) alert("Updated successfully");
      }
    render(){
        return(
        <table>
            <thead>
                <th>fName</th>
                <th>lName</th>
                <th>age</th>
                <th>mail</th>
                <th>password</th>
            </thead>
            <tbody>
                
                {this.state.map((obj ,index)=>
                <tr>
                   { Object.values(obj).map(keyValue =>
                        <td><input type="text" defaultValue={keyValue} onClick={(e)=>{this.setInputState(keyValue,e)}}/></td>
                )} <td><button onClick={this.updateUserState(index)}></button></td>
                </tr>)}
                
            </tbody>
        </table>
        )
    }
    
}
