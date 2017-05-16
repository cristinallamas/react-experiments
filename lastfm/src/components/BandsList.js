import React, {Component} from 'react';
import Band from './Band'
import Favorites from './Favorites'

export default class BandsList extends Component{

  constructor(){
    super();
    // this.listTitle = 'Title of the musiclist';
    this.state = {
      bands:[
        {'name':'deftones'},
        {'name':'tool'}
      ]
    }
  }

  getList(){
    return this.state.bands;
  }
  render(){
    console.log(this.props);

    return(
      <div>
        // <h1>{this.listTitle}</h1>
        <Favorites />
        <h2>All bands</h2>
        <ul><Band bandList={this.state.bands}/></ul>
      </div>
    );
  }
}
