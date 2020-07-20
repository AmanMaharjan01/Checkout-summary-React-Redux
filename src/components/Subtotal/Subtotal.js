import React, { Component } from "react";
import "../../App.scss";

export class Subtotal extends Component {
  render() {
    return (
      <div id="total" className="row">
        <div className="col-md-6">Subtotal </div>
        <div className="col-md-6">${this.props.price}</div>
      </div>
    );
  }
}

export default Subtotal;
