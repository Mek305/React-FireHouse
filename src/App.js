import React from 'react';

import './App.css';
import data from './Components/firehouse.js'


import House from './Components/House.js'
import HouseList from './Components/HouseList'

class App extends React.Component {
constructor(){
  super()
  this.state ={
    fireData: data ,
    currentHouse: null
  }
}


selectHouse(house){

  this.setState({
    currentHouse : house
  })
}





  render(){
  return (
    <div className="App">
      <header className="App-header">
        <HouseList fireData ={this.state.fireData} 
         selectHouse ={this.selectHouse.bind(this)}/>

         <House current = {this.state.currentHouse} />

      </header>
    </div>
  );
  }
}

export default App;
