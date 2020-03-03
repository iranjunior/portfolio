import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
`;

export const Description = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.85714;
    font-weight: 500;
    color: #838293;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;


`;
export const WrapperStrength = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 35px;
`;
export const Strength = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    perspective: 1000px;
    cursor: default;
    :hover {
        transform: rotateX(180deg) scale(1.2, 1.2);
        box-shadow: 0px 0px 20px #FFF;
    }  
`;
export const Front = styled.label`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
export const Back = styled.p`
    position: relative;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;

`;
