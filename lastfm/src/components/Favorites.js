import React, {Component} from 'react';
export default class Favorites extends Component{

  constructor(){
    super();
    this.listTitle = 'Favorites';

  }

  render(){
    return(
      <div>
        <h2>{this.listTitle}</h2>
      </div>
    );
  }
}
