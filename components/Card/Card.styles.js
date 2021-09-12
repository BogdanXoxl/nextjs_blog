import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  border-radius: 2rem;
  
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  
  :hover{
    opacity: .8;
  }
  
  animation: animateCard 1s;
  
  @keyframes animateCard{
    from{
      opacity: 0;
    }
    to{
      opacity: 100%;
    }
  }
`;

export const Img = styled(Image)`
  border-radius: 2rem;
  object-fit: cover;
  transition: all 0.3s;
`;

export const Title = styled.h3`
  position: absolute;
  padding: 10px;
  padding-top: 60%;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--white);
  border-radius: 2rem;

  background: linear-gradient(
          to bottom, rgba(0,0,0,0)
          10%, rgba(0,0,0,0.65)
          100%
  );
`;