import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

// eslint-disable-next-line no-unused-vars
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>Hello world</StyledApp>
    </>
  );
}

export default App;