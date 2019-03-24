import React, { Component } from 'react'
import axios from 'axios'

class fetch extends Component{
    state = {
        persons : [],
    }

    //https://jsonplaceholder.typicode.com/users
    //http://unikom.ac.id/api/v1/event

    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://unikom.ac.id/api/v1/event')
        .then(res => {
            console.log(res);
            this.setState({persons: res.data.result });
        
    });
}


    render(){
        return(
            <div>
                {this.state.persons.map(person => <div>
                    {person.nama_event} | {person.pengirim}  <br></br>                   
                    <img  width="30%"src={`http://unikom.ac.id/img_event/${person.foto}` }
                    />
                     <h2>{person.pengirim}</h2>
                </div>
                )}
            </div>
           
        )
    }
}

export default fetch;