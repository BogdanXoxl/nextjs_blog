import {Container} from "./Grid.styles";

const Grid = ({children}) => {
  return (
      <Container>
          {children}
      </Container>
  );
};

export default Grid;