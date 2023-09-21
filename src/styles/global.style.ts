/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root {
        /* Fontes */
        --font1: "Days One", sans-serif;
        --font2: "Karla", sans-serif;
        --font3: "Lato", sans-serif;
        /* Tamanhos */
        --sectionHeight: 700px;
        --headerHeight: 600px;
        --footerHeight: 200px;
        /* Cores */
        /* Cores de fundo1 */
        --bgColor1o1: rgb(247, 253, 255);
        /* Cores de fundo2 */
        --bgColor2o3: rgb(125, 184, 209);
        --bgColor2o2: rgb(143, 221, 255);
        --bgColor2o1: rgb(197, 228, 240);
        /* Cores de fundo3 */
        --bgColor3o3: rgb(63, 209, 180);
        --bgColor3o2: rgb(140, 255, 217);
        --bgColor3o1: rgb(215, 245, 255);
        /* Cores de fundo4 */
        --bgColor4o3: rgb(223, 146, 53);
        --bgColor4o2: rgb(224, 167, 97);
        --bgColor4o1: rgb(255, 252, 211);
        /* Cores de letra1 */
        --letterColor1o2: rgb(255, 234, 234);
        --letterColor1o1: rgb(255, 255, 255);
        /* Cores de letra2 */
        --letterColor2o1: rgb(227, 24, 24);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font3);
        font-weight: 400;
    }

    #root {
        display: grid;
        grid-template-rows: var(--headerHeight) 1fr var(--footerHeight);
    }
`

export default GlobalStyle
