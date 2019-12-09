import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 400px auto;

  grid-column: 2;
  background: #92b6cf;

  img {
    grid-row: 2;
    height: 400px;
    justify-self: center;
  }
`;

export const PriceContainer = styled.div`
  grid-row: 1;

  background: rgba(0,0,0,.2);
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 20px;

  display: grid;
  grid-template-columns: 80px;
  grid-template-rows: 80px;

  span {
    align-self: center;
    justify-self: center;
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const TitleContainer = styled.div`
  grid-row: 3;
  display: grid;
  color: #030303;
  text-align: right;
  padding-right: 20px;

  span {
    align-self: end;
    font-weight: 200;
  }
`;
