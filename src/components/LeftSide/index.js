import React, { Component } from 'react';
import { FaBars, FaInstagram, FaFacebook } from 'react-icons/fa';
import sneakerIcon from '../../assets/images/sneaker-icon.svg';
import { Container, MenuIconContainer, SocialContainer, AppIconContainer } from './style';


class LeftSide extends Component {
  state = { open: false };

  render() {
    return (
      <Container open={this.state.open}>
        <AppIconContainer open={this.state.open}>
          <img src={sneakerIcon} />
        </AppIconContainer>

        <MenuIconContainer open={this.state.open}>
          <FaBars onClick={() => this.setState({open: !this.state.open})}/>
        </MenuIconContainer>

        <SocialContainer open={this.state.open}>
          <div>
            <FaFacebook />
            <FaInstagram />
          </div>
        </SocialContainer>
      </Container>
    );
  }
}
export default LeftSide;
