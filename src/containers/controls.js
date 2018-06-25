import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactBootstrap from 'react-bootstrap';
import File from 'file';

import { selectPhoto } from '../actions/index';
import '../style.css';
import bulldog from '../bulldog.jpg';
import baby from '../baby_0.jpg';

window.URL = window.URL || window.webkitURL;

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = { photo: { bulldog } };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.files[0]);
    this.props.selectPhoto(window.URL.createObjectURL(event.target.files[0]));
  }

  onFormSubmit(event) {
    event.preventDefault();

    //We need to fetch weather data
    this.props.selectPhoto(this.state.photo);
    this.setState({ photo: { bulldog } });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous"
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <label
                class="btn btn-secondary"
                style={{ width: 145, margin: 5 }}
                href="#"
                role="button"
              >
                <input
                  class="btn btn-secondary"
                  style={{ width: 145, margin: 5 }}
                  type="file"
                  name="file"
                  id="files"
                  onInput={this.onInputChange}
                />
                Photo Upload
              </label>
            </div>
            <div className="row">
              <a
                class="btn btn-secondary"
                style={{ width: 145, margin: 5 }}
                href="#"
                role="button"
              >
                Screenshot
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <a
                class="btn btn-secondary"
                style={{ width: 145, margin: 5 }}
                href="#"
                role="button"
              >
                Recognize Face:
              </a>
            </div>
            <div className="row">
              <a
                class="btn btn-secondary"
                style={{ width: 145, margin: 5 }}
                href="#"
                role="button"
              >
                Detect Emotion:
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPhoto }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Controls);
