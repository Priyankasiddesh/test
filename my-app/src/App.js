import logo from './logo.svg';
import './App.css';
import React from 'react';

/*function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}*/
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    date:new Date(),
    isToggleOn:true
  };
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick() {    
    this.setState(state => ({      isToggleOn: !state.isToggleOn    }));  
  }
  
  componentDidMount(){
    this.timerId=setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({date:new Date()});
  }
  render(){
    //const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>hello world hai</h1>
       <h2>it is{this.state.date.toLocaleTimeString()}.</h2>
       <button onClick={this.handleClick}>        
       {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      
      </header>
    </div>
  );
}
}

export default App;

