import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    display:inline-block;
}
h1{
    font-weight:800;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
}
a{
    text-decoration: none;
}
`
export default GlobalStyle;