import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 500px);
  justify-content: center;
`;