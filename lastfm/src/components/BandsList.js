import React, {Component} from 'react';
import Band from './Band'

export default class BandsList extends Component{

  constructor(){
    super();
    // var test = this.tracksGet();
    // console.log(test);

    this.state = {
      bands:[
        {'name':'deftones'},
        {'name':'tool'}
      ]
    };


  }
  getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
  }
  tracksGet(){
    this.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=chriskinch&api_key=8a1051b163165029d6dcaed68752152a&format=json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
        console.log('json load error');
      } else {
        // console.log(data.topartists.artist);

        return data.topartists.artist;
      }
    });
  }


  getInitialState(){
    return { bands: this.tracksGet()};
}

  getList(){
    return this.state.bands;
  }


  render(){
    // this.getInitialState();


    console.log(this.state);

    return(
      <div>
      <h2>All bands</h2>

        <ul>
        {this.state.bands.map((band,i) =>{
          return(
            <Band key={i} band={band}/>
          );
        })}
        </ul>
      </div>
    );
  }
}
