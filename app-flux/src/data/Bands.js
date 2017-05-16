
import React, { Component } from 'react';
import BandItem from './Band'
import MusicStore from './Store'
// import API from './Api'
class BandItems extends Component  {

  render(props) {
    // 
    console.log(this.props.musicState,'Bands: this.props.musicState');

    return (
      <ul>
      bands go here in a foreach
        <BandItem {...props}/>
      </ul>
    );
  }

}


export default BandItems;
