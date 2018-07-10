import React, { Component } from "react";
import Order from "./Order";

//------------for get the json data
const url_orders = "http://localhost:3000/orders/list";
export default class Orders extends Component {
  state = {
    orders: []
  };
  componentWillMount() {
    fetch(url_orders)
      .then(response => {
        // console.log("RESPONSE------- ", response);
        return response.json();
      })
      .then(parsed => {
        console.log("PARSED--- ", parsed);
        this.setState({ orders: parsed.orders });
      });
  }

  render() {
    console.log("orders data '''': ", this.state.orders);
    const orders = this.state.orders.map(o => (
      <div key={o.id}>
        <Order
          email={o.email}
          created_at={o.created_at}
          note={o.note}
          total_price={o.total_price}
          subtotal_price={o.subtotal_price}
          total_tax={o.total_tax}
          order_number={o.order_number}
          financial_status={o.financial_status}
          line_items={o.line_items}
        />
      </div>
    ));
    return <div>{orders}</div>;
  }
}
