import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-columns: 10vw repeat(2, calc((100vw - 20vw) / 2)) 10vw;
  grid-template-rows: 100vh;
`;
