import React, { Component } from "react";
import { Collapse, Media } from "reactstrap";
import "../../App.scss";

export class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isOpen: false,
    };

    this.showdetail = this.showdetail.bind(this);
  }

  showdetail() {
    this.setState({
      show: !this.state.show,
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div id="see-more" className="row">
        <div>
          <button
            id="btn-text"
            onClick={this.showdetail}
            style={{ marginBottom: "1rem" }}
          >
            {this.state.show ? <span>Hide</span> : <span>See</span>} item
            details {this.state.show ? <span>-</span> : <span>+</span>}
          </button>
          <Collapse isOpen={this.state.isOpen}>
            <Media style={{ width: "90%" }}>
              <Media left>
                <img src="./img/s9.jpg" width="120" alt="product" />
              </Media>
              <Media body>
                <Media heading id="title">
                  Samsung Galaxy S9 [ 6 GB RAM, 128 GB ROM] 6.4 Inch Screen
                </Media>
                <div id="detail">
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <strong>${this.props.price}</strong>
                      </span>
                      <br />
                      <span>
                        <strong>
                          <s>${this.props.price}</s>
                        </strong>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>Qty: {this.props.quantity}</span>
                    </div>
                  </div>
                </div>
              </Media>
            </Media>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
