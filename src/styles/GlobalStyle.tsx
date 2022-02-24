import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    

    
    *{
      
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //color: black;
        
    }
    a{
      text-decoration: none;
      color: #333;
      &:hover{  
          color: rgb(255, 116, 36)
        }
    }

    html, body{
      width: 100%;
      height: 100%;
      font-size: 15px; // 1rem = 10px
      font-family: 'Poppins', 'Noto Sans KR' , 'sans-serif';
      color: #333;
      background-color: #f2f2f2;

      @media (max-width: 1200px){
        /* font-size: 10px; */
      }
    }
    :root{
      --point-color-orange: #FF6C26;
      --point-color-yellow:#ffc90a;
      --point-color-red: #cc2418;
      --secondary-color: #7973ce;
      
    }
    
    *{
      
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //color: black;
        
    }
    a{
      color: #333;
      &:hover{  
          color: rgb(255, 116, 36)
        }
    }

    html, body{
      width: 100%;
      height: 100%;
        font-size: 15px; // 1rem = 10px
        font-family: 'Poppins', 'Noto Sans KR' , 'sans-serif';
        color: #333;
        background-color: #f2f2f2;

        @media (max-width: 1200px){
          /* font-size: 10px; */
        }
    }

`;
export default GlobalStyle;
