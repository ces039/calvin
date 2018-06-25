import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';

import '../style.css';
import bulldog from '../bulldog.jpg';

class Live_feed extends Component {
  render() {
    return (
      <div className="live2">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous"
        />
        <div className="row">
          <div className="col-lg-12">
            <p className="text"> Live Feed: </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <img className="bulldog" src={bulldog} />
          </div>
        </div>
      </div>
    );
  }
}

export default Live_feed;
