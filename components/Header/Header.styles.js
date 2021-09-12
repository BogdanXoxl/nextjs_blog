import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  display: block;
  background: var(--green);
  width: 100%;
  height: 10vh;
  
  a{
    padding: .3rem;
    font-size: var(--fontMed);
    color: var(--white);
    
    :hover{
      color: var(--darkGreen);
    }
    
    &.active{
      box-shadow: 0 5px 5px -5px var(--red);
    }
  }
  
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.ul`
  margin: 10px;
  li{
    display: inline-block;
    margin-left: 1.5rem;
  }
`;