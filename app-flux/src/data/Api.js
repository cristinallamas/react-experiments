let API = {



    getJSON: function (url, callback) {
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
    },

    tracksGet:function(){
      this.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=chriskinch&api_key=8a1051b163165029d6dcaed68752152a&format=json',
      function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
          console.log('json load error');
        } else {
          return data;
        }
      });
    },


};

export default API;
