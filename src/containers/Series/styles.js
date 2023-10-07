import styled, { keyframes } from 'styled-components'

const scale = keyframes `
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 1500px;
    margin-top: 80px;

  
`

export const Background = styled.div `

    background-image: url(${(props) => props.img});
    height: 60vh;
    width: 70vw;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 10px 20px;
    margin-bottom: 20px;
    animation: ${scale} 0.7s linear ;


    h1 {
        margin-top: 20px;
        color: #000;
        font-weight: 700;
    }


`

