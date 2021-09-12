import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  span{
    color: var(--grey);
    margin: 1rem 5rem;
  }
  
  a{
    color: var(--pink);
    :hover{
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  width: 100%;
  color: var(--white);
  text-align: center;
  padding: 300px 3rem 0;
  font-size: var(--fonstSSBig);
  margin-bottom: 3rem;
  background: linear-gradient(
          to bottom, rgba(0,0,0,0)
          41%, rgba(0,0,0,0.65)
          100%
  ),
  url(${props => props.image}), var(--darkGreen);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  :first-letter{
    text-transform: capitalize;
    color: var(--red);
    font-size: var(--fontSSSBig);
  }
`;

export const Description = styled.p`
  max-width: var(--maxWidth);
  margin: 3rem auto;
  font-size:  var(--fontMed);
  
  :first-letter{
    text-transform: capitalize;
  }
`;

export const CommentsBlock = styled.div`
  max-width: 700px;
  height: 30vh;
  overflow-y: scroll;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid var(--green);
  border-bottom: none;
  border-left: none;
`;

export const Comment = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid var(--red);
`;

export const Name = styled.h3`
  color: var(--pink);
  font-size: var(--fontMed);
  
  :hover{
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  color: var(--darkGreen);
  font-size: var(--fontMed);
  min-height: 100px;
`;