import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactBootstrap from 'react-bootstrap';

import '../style.css';
import bulldog from '../bulldog.jpg';

class Photo extends Component {
  choosePhoto(photo) {
    if (typeof photo == 'object') {
      return <img className="bulldog" src={bulldog} />;
    } else {
      console.log(photo);
      console.log(typeof photo);
      return <img className="bulldog" src={this.props.photo} />;
    }
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous"
        />
        <div className="row">
          <div className="col-lg-12">
            <p className="text"> Source Photo: </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div>{this.choosePhoto(this.props.photo)}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photo: state.photo };
}

export default connect(mapStateToProps)(Photo);
