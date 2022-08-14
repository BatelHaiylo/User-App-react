import { Component } from "react";

export default class User extends Component{
    constructor(props){
        super()
        this.state = {fName:"NO NAME",
                      lName:"enter last name",
                      age:"enter age",
                      mail:"enter mail",
                      password:"enter password"}
    }
    printNameToLog(){
        console.log("Batel")
    }
    changePrintNameToMyName(){
        this.setState({fName:"Batel"})
    }
    getUserFirstName(e){
        this.setState({fName:e.target.value})
    }
    getUserLastName(e){
        this.setState({lName:e.target.value})
    }
    getUserAge(e){
        this.setState({age:e.target.value})
    }
    getUserMail(e){
        this.setState({mail:e.target.value})
    }
    getUserPassword(e){
        this.setState({password:e.target.value})
    }
    displayOnFormSubmit(e){
        e.preventDefault()
    }
    render(){
        return(
            <div class="text-bg-dark p-3">
                <p>{this.state.fName}</p>
                <button onClick={this.printNameToLog}>show my name</button>
                <button onClick={()=>this.changePrintNameToMyName()}>show my name</button>
                <form onSubmit={(e)=>this.displayOnFormSubmit(e)}>

                <input type="text" value={this.state.fName} onChange={(e)=>this.getUserFirstName(e)} />
                <h1>{this.state.fName}</h1>
                <input type="text" value={this.state.lName} onChange={(e)=>this.getUserLastName(e)} />
                <h1>{this.state.lName}</h1>
                <input type="number" value={this.state.age} onChange={(e)=>this.getUserAge(e)} />
                <h1>{this.state.age}</h1>
                <input type="mail" value={this.state.mail} onChange={(e)=>this.getUserMail(e)} />
                <h1>{this.state.mail}</h1>
                <input type="text" value={this.state.password} onChange={(e)=>this.getUserPassword(e)} />
                <h1>{this.state.password}</h1>
                <GetDataAsTable obj={this.state}/>
                <button>submit</button>
                </form>
            </div>
        )
    }
}

export function GetDataAsTable(props){
    return(
        <table>
            <thead>
                {Object.keys(props.obj).map(key => 
                        <th>
                            {key}
                        </th>
                )} 
           </thead>
            <tbody>
                <tr>
                {Object.keys(props.obj).map(key => 
                        <td>
                            {props.obj[key]}
                        </td>
                )} 
                </tr>
            </tbody>
        </table>
    )
}
