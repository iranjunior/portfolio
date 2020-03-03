import styled from 'styled-components';

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
