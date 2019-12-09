import React, { Component } from 'react';
import sneakerone from '../../assets/images/sneaker-one.png';
import { 
  Container,
  Product
} from './style';


class Products extends Component {
  render() {
    return (
      <Container>
        <Product background="#d7c4eb">
          <div>
            <small>$110</small>
          </div>
          <img src={sneakerone} />
          <span>Sneaker One</span>
        </Product>
        <Product background="#ffeeb1" color="#000">
          <div>
            <small>$110</small>
          </div>
          <img src={sneakerone} />
          <span>Sneaker One</span>
        </Product>
        <Product background="#f3f3f5" color="#000">
          <div>
            <small>$110</small>
          </div>
          <img src={sneakerone} />
          <span>Sneaker One</span>
        </Product>
        <Product background="#ffced3">
          <div>
            <small>$110</small>
          </div>
          <img src={sneakerone} />
          <span>Sneaker One</span>
        </Product>
      </Container>
    );
  }
}
export default Products;
