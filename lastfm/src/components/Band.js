import React, {Component} from 'react';

export default class Band extends Component{

  constructor(){
    super();

  }


  render(){

    console.log(this.props.bandList);


    return(
      <div>
      {this.props.bandList.map((band, i) => {
        return (
          <li key={i}>{band.name}</li>
        );
      })}
      </div>



    );
  }
}
