import React, { Component } from "react";
import "../../App.scss";

export class EstimatedTotal extends Component {
  render() {
    return (
      <div id="estimated" className="row">
        <div className="col-md-6">Est. total </div>
        <div className="col-md-6">${this.props.price}</div>
      </div>
    );
  }
}

export default EstimatedTotal;
