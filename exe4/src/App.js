import React, { Component } from 'react';
import './App.css';

import Picture from './Picture';

import image1 from './assets/img/image1.jpg';
import image2 from './assets/img/image2.jpg';
import image3 from './assets/img/image3.jpg';
import image4 from './assets/img/image4.jpg';
import image5 from './assets/img/image5.jpg';
import image6 from './assets/img/image6.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      imageSrc: image1,
    };
  }

  _onImageClick = (imageSrc) => {
    this.setState({
      imageSrc: imageSrc,
    });
  };

  render() {
    return (
      <div className='picture-view'>
        <div className='thumbnail-container'>
          <Picture imgSrc={image1} pictureClicked={this._onImageClick} />
          <Picture imgSrc={image2} pictureClicked={this._onImageClick} />
          <Picture imgSrc={image3} pictureClicked={this._onImageClick} />
        </div>
        <div className='main-view'>
          <div className='preview-image'>
            <img id='mainImage' src={this.state.imageSrc} alt='' />
          </div>
        </div>
        <div className='thumbnail-container'>
          <Picture imgSrc={image4} pictureClicked={this._onImageClick} />
          <Picture imgSrc={image5} pictureClicked={this._onImageClick} />
          <Picture imgSrc={image6} pictureClicked={this._onImageClick} />
        </div>
      </div>
    );
  }
}

export default App;
