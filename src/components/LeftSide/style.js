import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  grid-column: 1;
  grid-row: 1;
  z-index: 9;
  overflow: hidden;
  background: #fff;
  width: ${props => props.open? 'calc(10vw + ((100vw - 20vw) / 2))' : '10vw'};

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: ${
    props => props.open?
      'calc((100vw - 20vw) / 2) 10vw' : '10vw'
  };
`;

export const AppIconContainer = styled.div`
  grid-column: ${props => props.open? 2: 1};

  justify-self: center;

  > img {
    padding-top: 20px;
  }
`;

export const MenuIconContainer = styled.div`
  grid-column: ${props => props.open? 2: 1};
  grid-row: 2;

  font-size: 1.4rem;
  justify-self: center;
  align-self: center;

  > svg {
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
  grid-column: ${props => props.open? 2: 1};
  grid-row: 3;

  align-self: end;
  padding-bottom: 20px;

  > div {
    display: grid;
    grid-row-gap: 10px;

    justify-items: center;

    svg { cursor: pointer; }
  }
`;
