import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

a{
    text-decoration: none;
}

h1{
    font-family: "Bellefair", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 150px;
    line-height: 172px;
}
h2{
    font-family: "Bellefair", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 100px;
    line-height: 114px;

}

h3{
    font-family: "Bellefair", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 56px;
    line-height: 64.18px;
}
h4{
    font-family: "Bellefair", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 36.67px;
}
h5{
    
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 4.72px;
    font-family: 'Barlow Condensed', sans-serif;
    color: #d0d6f9;
}

.subheading-1{
    font-family: "Barlow Condensed", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 32px;
}
.subheading-2{
    font-family: "Barlow Condensed", serif;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
}

p{
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    color: white;
    line-height: 32px;
}

img{
    width:100%;
    height:100%;
}


`