import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 1rem auto;
  display: grid;
  grid-template-areas: 
            "p p t t t ."
            "p p i i a a";
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
`;

export const Photo = styled.div`
  grid-area: p;
  background: red;
`;

export const Name = styled.h2`
  grid-area: t;
  
  color: var(--darkGreen);
  font-size: var(--fontBig);
  padding: 1rem;
  :first-letter{
    color: var(--red);
    font-size: var(--fonstSBig);
  }
  
  span{
    display: block;
    font-size: var(--fontSmall);
    color: var(--grey);
    
    :before{
      content: "@";
    }
  }
`;

export const CommonInfo = styled.div`
  grid-area: i;
  
  padding: 3px;
  display: flex;
  flex-direction: column;
  
  p{
    color: black;
    font-size: var(--fontMed);
    a{
      color: var(--pink);
      :hover{
        text-decoration: underline;
      }
    }
  }
`;

export const AddressContainer = styled.ul`
  grid-area: a;
`;