import React, { Component } from "react";
import { Tooltip } from "reactstrap";
import "../../App.scss";

export class PickupSavings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }
  render() {
    return (
      <div>
        <div id="saving" className="row">
          <div className="col-md-6">Picking Savings </div>
          <div className="col-md-6" id="picking-price">
            ${this.props.price}
          </div>
        </div>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="saving"
          toggle={this.toggle}
        >
          <p>
            Picking up your order in the store helps cut costs, and we pass the
            saving on top of you
          </p>
        </Tooltip>
      </div>
    );
  }
}

export default PickupSavings;
