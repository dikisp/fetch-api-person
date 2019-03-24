import React, { Component } from 'react';
import Loading from './spinner'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
        items : [],
        isLoaded : false,
    }
}
// https://jsonplaceholder.typicode.com/users
//https://unikom.ac.id/api/v1/event
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded:true,
            items : json, 
        })
    });
}


  render() {
    var {isLoaded, items} = this.state;

    if (!isLoaded){
        return <div> <Loading/></div>;
    }
    else{            
    return(
        <div>
            <ul>
                {items.map(item => (
                  <li key={item.id}>
                    Nama Event : {item.name} | Email : {item.email}
                  </li>           
                ))}
            </ul>
        </div>
    )
}
  }
}

export default App;
