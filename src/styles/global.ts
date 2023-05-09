import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-primary-blue: #1C3144;
        --color-primary-blue1: #074969;
        --color-light-blue: #3F88C5;
        --color-primary-red: #D00000;
        --color-primary-yellow: #FFBA08;
        --color-primary-grey: #A2AEBB;
    }

    @font-face {
        font-family: 'Exo';
        src: url('/fonts/ExoRegular-ymMe.otf');
    }

    @font-face {
        font-family: 'Olim Futura';
        src: url('/Olimfuturabook-RwOe.otf');
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Exo', sans-serif;
    }

    body, html{
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }
`;
