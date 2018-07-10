import React, { Component } from "react";
import Product from "./Product";
// import Shopify from 'shopify-api-node';

//------------for get the json data
const url = "http://localhost:3000/list";
// const url = 'http://192.168.43.253:3000/list';

export default class Products extends Component {
  state = {
    products: []
  };
  componentWillMount() {
    fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(resp => this.setState({ products: resp.products }));
  }

  render() {
    console.log("product data '''': ", this.state.products);
    const products = this.state.products.map(p => (
      <div key={p.id}>
        <Product
          name={p.title}
          img={p.image.src}
          price={p.variants.map(pr => pr.price)}
        />
      </div>
    ));
    return <div>{products}</div>;
  }
}
