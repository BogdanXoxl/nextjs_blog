import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 10px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 1.6rem;
`;