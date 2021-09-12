import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --red: #aa0000;
    --pink: #c55a71;
    --white: #e7e7f3;
    --green: #7a9850;
    --darkGreen: #182f0f;
    --grey: #b4b4c2;
    
    --fontSSSBig: 5rem;
    --fonstSSBig: 4rem;
    --fonstSBig: 3rem;
    --fontBig: 1.6rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontVSmall: .7rem;
    --maxWidth: 1080px;
  }
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: "IBM Plex Sans Arabic", sans-serif;
  }
  
  html, body{
    width: 100vw;
    background: var(--white);
  }
  ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;