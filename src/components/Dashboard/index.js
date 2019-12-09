import React, { Component } from 'react';
import { Container } from './style';
import Featured from '../Featured/index';
import Products from '../Products/index';


class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Featured />
        <Products />
      </Container>
    );
  }
}
export default Dashboard;
