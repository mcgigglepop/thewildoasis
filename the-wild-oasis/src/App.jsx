import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

// eslint-disable-next-line no-unused-vars
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

// eslint-disable-next-line no-unused-vars
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return <StyledApp>Hello world</StyledApp>
}

export default App;