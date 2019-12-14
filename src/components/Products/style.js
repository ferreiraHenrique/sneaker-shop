import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  grid-column: 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40vh 40vh 20vh;
`;

const priceAnimation = keyframes`
  0% { transform: scale(0); };
  50% { transform: scale(1.2); };
  100% { transform: scale(1); };
`;

export const Product = styled.div`
  background: ${props => props.background};

  display: grid;
  grid-template-rows: auto 120px auto;

  > img {
    height: 100px;
    grid-row: 2;
    justify-self: center;
    align-self: center;
    transition: padding .4s ease;    
  }

  > div {
    display: grid;
    grid-template-columns: 50px;
    grid-template-rows: 50px;
    transform: scale(0);

    align-self: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
    background: rgba(0,0,0,.2);
    font-size: .9rem;
    align-self: end;
    color: ${props => props.color? props.color : '#fff' };
    transition: transform .4s ease;

    > small {
      align-self: center;
      text-align: center;
    }
  }

  span {
    grid-row: 3;
    color: transparent;
    text-align: center;
  }

  &:hover {
    > img {
      padding-bottom: 20px;
      transition: padding .4s ease;
    }

    > div {
      animation-name: ${priceAnimation};
      animation-duration: .4s;
      animation-fill-mode: forwards;
      transition: transform .4s ease;
      opacity: .7;
    }

    span {
      color: ${props => props.color? props.color : '#fff' };
      opacity: ${props => props.color? .7 : 1};
    }
  }
`;
