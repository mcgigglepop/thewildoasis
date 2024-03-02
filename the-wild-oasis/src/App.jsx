import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
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