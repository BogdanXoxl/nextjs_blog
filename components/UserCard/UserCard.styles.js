import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap:1rem;
  border-top: 1px solid var(--grey);
  border-bottom: 1px solid var(--grey);
  border-radius: 3px;
  padding: 1rem;
  
  a{
    color: var(--pink);
  }
  
  h3, a{
    font-size: var(--fontBig);
  }
  
  p{
    color: var(--darkGreen);
    font-size: var(--fontMed);
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  
  :hover{
    background: var(--green);
    color: var(--darkGreen);
    a{
      color: var(--white);
    }
  }
  
  :active{
    background: var(--darkGreen);
  }
  
`;