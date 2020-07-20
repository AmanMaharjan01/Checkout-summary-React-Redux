import React, { Component } from "react";
import { Collapse } from "reactstrap";
import "../../App.scss";

export class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isOpen: false,
    };

    this.showdetail = this.showdetail.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  showdetail() {
    this.setState({
      show: !this.state.show,
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div id="Coupon" className="row">
        <div>
          <button
            id="btn-text"
            onClick={this.showdetail}
            style={{ marginBottom: "1rem" }}
          >
            {this.state.show ? <span>Hide</span> : <span>See</span>} Coupon Code
            {this.state.show ? <span>-</span> : <span>+</span>}
          </button>
          <Collapse isOpen={this.state.isOpen}>
            <div className="coupon">
              <p id="code">
                <b>Promo code:</b>
              </p>
              <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Enter Coupon Code" />
                <button id="apply">Apply</button>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default PromoCode;
