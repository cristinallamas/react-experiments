import React from 'react';
// import logo from '../logo.svg';
import '../App.css';
import BandItems from '../data/Bands';

// import classnames from 'classnames';



function AppView(props) {
  return (
    <div className="App">
      <Header {...props} />
      <Favorites {...props} />
      <Main {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header" className="App-header">
      <h1>Title header</h1>
    </header>
  );
}

function Main(props) {
  if (props.musicState.list.size === 0) {
    return null;
  }
console.log(props.musicState,'app view');
  return (
    <section id="main" className="App-intro">
          <BandItems {...props}/>
    </section>
  );
}

function Favorites(props) {
  if (props.musicState.list.size === 0) {
    return null;
  }

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
        </strong>
      </span>
    </footer>
  );
}

export default AppView;
