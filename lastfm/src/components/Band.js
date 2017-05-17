import React, {Component} from 'react';

export default class Band extends Component{

  // constructor(){
  //   super();
  // //
  // //
  // 'name':this.props.band.name;
  // }


  render(){

    console.log(this.props);
    console.log(this.props.band.name);


    return(
      <li>{this.props.band.name}</li>
    );


  }




}
