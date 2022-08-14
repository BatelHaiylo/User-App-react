import { Component } from "react";

export default class UsersTable extends Component{
    constructor(props){
        super()
        this.state = [
            {

            id:"user1",
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
        },
            {
            id:"user2",
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
        },
            {
            id:"user3",
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
        },
            {
            id:"user4",
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
        },
            {
            id:"user5",
            fName:"enter your first name",
            lName:"enter your last name",
            age:"enter your name",
            mail:"enter yoour email address",
            password:"enter your password"
        },
    ]
    }
    render(){
        return(
        <table>
            <thead>
                <th>id</th>
                <th>fName</th>
                <th>lName</th>
                <th>age</th>
                <th>mail</th>
                <th>password</th>
            </thead>
            <tbody>
                
                {this.state.map(obj=>
                <tr>
                   { Object.values(obj).map(keyValue =>
                    
                        <td><input type="text" value={keyValue} onClick={()=>{}}/></td>
                        
                    
                    )}</tr>)}
                
            </tbody>
        </table>
        )
    }
    
}
