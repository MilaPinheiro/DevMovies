import styled from 'styled-components'


export const Background = styled.div `
    height: 100vh;
    width: 100vw;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  
`
export const Container = styled.div `
    background: #000;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;


    iframe {
        border: none;
    }
    
    button {
        width: 30px;
        border: transparent;
        position: absolute;
        background-color: black;
        font-size: 20px;
        color: #ffffff;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    button: hover {
        background-color: red;
    }

`
