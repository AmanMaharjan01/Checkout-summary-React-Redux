import React, { Component } from "react";
import "./App.scss";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import Subtotal from "./components/Subtotal/Subtotal";
import PromoCode from "./components/PromoCode/PromoCode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 500,
      PickupSavings: -3.85,
      taxes: 0,
      estimated: 0,
      quantity: 1,
    };
  }

  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.0875,
      },
      function () {
        this.setState({
          estimated:
            this.state.total + this.state.PickupSavings + this.state.taxes,
        });
      }
    );
  }
  render() {
    console.log("oi2");
    return (
      <div className="App">
        <div className="checkout">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees price={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimated.toFixed(2)} />
          <ItemDetails
            price={this.state.estimated.toFixed(2)}
            quantity={this.state.quantity}
          />
          <PromoCode />
        </div>
      </div>
    );
  }
}

export default App;
