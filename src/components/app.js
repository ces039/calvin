import React, { Component } from 'react';
import Live_feed from '../components/live_feed';
import Photo from '../containers/photo';
import Controls from '../containers/controls';
import Calvin from '../Calvin.png';
import bulldog from '../bulldog.jpg';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div class="row">
          <img className="image" src={Calvin} />
        </div>
        <div class="row">
          <div class="col-lg-1" />
          <div class="col-lg-5">
            <Live_feed />
          </div>
          <div class="col-lg-5">
            <Photo />
          </div>
          <div class="col-lg-1" />
        </div>
        <div class="row">
          <div class="col-lg-1" />
          <div class="col-lg-5">
            <Controls />
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossorigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
          integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
          crossorigin="anonymous"
        />
        <script src="/bundle.js" />
      </div>
    );
  }
}
