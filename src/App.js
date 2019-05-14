import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkFrom from './components/ImageLinkFrom/ImageLinkFrom'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from  'clarifai';

/*https://ep01.epimg.net/cultura/imagenes/2017/01/06/babelia/1483723292_117852_1483723292_158714_noticia_normal.jpg*/


const particlesOptions = {
  particles: {
    "number": {
      "value": 100
    },
    "size": {
      "value": 3
    }
  }
};

const app = new Clarifai.App({
    apiKey: '5038ac76e7974556bd2a37a62f9b80a6'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input : '',
            imageUrl: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            input : event.target.value
        })
    };

    onSubmit = () => {
        this.setState({
            imageUrl : this.state.input
        });

        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL,
                this.state.input)
            .then(
            function(response) {
                console.log(response.outputs)
                // do something with response
            },
            function(err) {
                // there was an error
            }
        );
    };

    render() {
        return (
            <div className="App">
                <Particles params={particlesOptions} className='particles'/>
                <Navigation/>
                <Logo />
                <Rank />
                <ImageLinkFrom onInputChange={ this.onInputChange}  onButtonSubmit={ this.onSubmit} />
                <FaceRecognition imageUrl = {this.state.imageUrl}  />
            </div>
        );
    }
}
export default App;
