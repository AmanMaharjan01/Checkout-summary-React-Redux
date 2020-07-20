import React, { Component } from "react";
import "../../App.scss";

export class TaxesFees extends Component {
  render() {
    return (
      <div id="taxes" className="row">
        <div className="col-md-6">Est. taxes and fees (Based on 23123)</div>
        <div className="col-md-6">${this.props.price}</div>
      </div>
    );
  }
}

export default TaxesFees;
