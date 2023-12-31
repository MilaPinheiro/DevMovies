import styled, { keyframes } from 'styled-components'

const scale = keyframes `
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const Background = styled.div `
    background-image: url(${props => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
   

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
    }


`
export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 1500px;

    @media (max-width: 600px) {

        display: flex;
        flex-direction: column;
    }
`

export const Info = styled.div `
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #ffffff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    @media (max-width: 600px) {
        margin-top: 120px;
        width: 90%;
        
       
        h1 {
            margin: 20px 20px;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        p {
           display: none;

        }
    }
`

export const Poster = styled.div`
    z-index: 2;
    img{
        width: 300px;
        border-radius: 30px;
        animation: ${scale} 0.6s linear ;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 600px) {
        width: 100%;
    
    }
`