import React, {Component} from 'react';
import Band from './Band'
export default class Favorites extends Component{

  constructor(){
    super();
    this.listTitle = 'Favorites';

  }

  render(){
    console.log(this.props);

    return(
      <div>
        <h2>{this.listTitle}</h2>
      </div>
    );
  }
}
