import React, { Component } from 'react';
import { Container } from './style';
import Featured from '../Featured/index';
import Products from '../Products/index';
import LeftSide from '../LeftSide/index';


class Dashboard extends Component {
  render() {
    return (
      <Container>
        <LeftSide />
        <Featured />
        <Products />
      </Container>
    );
  }
}
export default Dashboard;
