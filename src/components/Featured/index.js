import React, { Component } from 'react';
import sneakerfeatured from '../../assets/images/sneaker-featured.png';
import { Container, PriceContainer, TitleContainer } from './style';


class Featured extends Component {
  render() {
    return (
      <Container>
        <PriceContainer>
          <span>$99</span>
        </PriceContainer>
        <img src={sneakerfeatured} />
        <TitleContainer>
          <span>Summer 2019</span>
          <b>Featured Sneaker</b>
        </TitleContainer>
      </Container>      
    );
  }
}
export default Featured;
