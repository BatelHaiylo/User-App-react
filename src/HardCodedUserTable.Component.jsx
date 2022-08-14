import { Component } from "react";

export default class HardCodedUserTable extends Component{
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
                <tr>
                    <td><input type="text" value={this.state[0].id} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[0].fName} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[0].lName} onClick={()=>{}}/></td>
                    <td><input type="number" value={this.state[0].age} onClick={()=>{}}/></td>
                    <td><input type="email" value={this.state[0].mail} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[0].password} onClick={()=>{}}/></td>
                </tr>
                <tr>
                    <td><input type="text" value={this.state[1].id} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[1].fName} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[1].lName} onClick={()=>{}}/></td>
                    <td><input type="number" value={this.state[1].age} onClick={()=>{}}/></td>
                    <td><input type="email" value={this.state[1].mail} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[1].password} onClick={()=>{}}/></td>
                </tr>
                <tr>
                    <td><input type="text" value={this.state[2].id} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[2].fName} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[2].lName} onClick={()=>{}}/></td>
                    <td><input type="number" value={this.state[2].age} onClick={()=>{}}/></td>
                    <td><input type="email" value={this.state[2].mail} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[2].password} onClick={()=>{}}/></td>
                </tr>
                <tr>
                    <td><input type="text" value={this.state[3].id} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[3].fName} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[3].lName} onClick={()=>{}}/></td>
                    <td><input type="number" value={this.state[3].age} onClick={()=>{}}/></td>
                    <td><input type="email" value={this.state[3].mail} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[3].password} onClick={()=>{}}/></td>
                </tr>
                <tr>
                    <td><input type="text" value={this.state[4].id} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[4].fName} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[4].lName} onClick={()=>{}}/></td>
                    <td><input type="number" value={this.state[4].age} onClick={()=>{}}/></td>
                    <td><input type="email" value={this.state[4].mail} onClick={()=>{}}/></td>
                    <td><input type="text" value={this.state[4].password} onClick={()=>{}}/></td>
                </tr>
            </tbody>
        </table>
        )
    }
    
}
