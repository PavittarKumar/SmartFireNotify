import React, { Component } from 'react';
import Particles from 'react-particles-js';
// import extractor from 'email-extractor';
// import Iframe from 'react-iframe';
// import Clarify from 'clarifai';
// import NewWindow from 'react-new-window';
// import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FireAlarm from './components/FireAlarm/FireAlarm';
import './App.css';





const particlesOptions={
  particles: {
    number: {
      value:200,
        density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked:{
      color:'#ffffff'
    }
  },
  interactivity:{
    onhover:{
      enable: true,
      mode: 'bubble'
    }
  }
}
class App extends Component {
  constructor()
  {
    super();
    this.state={
      input:'',
      imageUrl:'',
      box: {},
      
    }
  }
    
  test=()=>{
    setTimeout(() => {
     window.location.reload(false);
    // alert("hello");
    }, 1000); 
    
  }

    onInputChange=(event)=>{
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () =>{
    
      this.setState({imageUrl: this.state.input})
       var x=this.state.input;
       x = x.replace(/ +/g, "+");
       x = x.replace(/,+/g, "%2C");
       console.log(x);
      
       window.open("https://www.google.com/maps/dir/Bahera+Rd,+Dharampura,+Patiala,+Punjab+147001/"+x);

    }
    

    render(){
      const { imageUrl,box} = this.state;
      return(
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      />
      <FireAlarm box={box} imageUrl={imageUrl}  />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>

      
      </div>
  )};
}

export default App;