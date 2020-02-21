import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
`;
export const Card = styled.div`
    width: 80%;
    height: auto;
    background-color: ${(props) => props.theme.colors.primary};
    margin-top: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
export const CardHeader = styled.div`
    flex-direction: column;
`;
export const Decision = styled.a`
    font-weight: 300;
    margin-top: 20px;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
export const CardContent = styled.div`
    flex-direction: column;
    height: 0px;
    overflow: hidden;
    transition: all 500ms ease;
    ${(props) => props.active && css`
        height: auto;
    `}
`;

export const TitleCard = styled.h3``;
export const DateCard = styled.h4`
    margin: 0;
    font-weight: 200;
`;
export const Content = styled.p`
    font-weight: 400;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};

    margin: 0;
`;
export const Summary = styled.h3`
    font-size: 30px;
    font-weight: 500;
    color: #7a798c;
    line-height: 0.75;

`;
export const Name = styled.h1`
    font-size: 92px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 0.75;
    margin-top: 0px;
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
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 20px;
    font-weight: 600;
    transition: all 500ms ease;

    :hover{
        transform: scale(1.1, 1.1);
        box-shadow: 0px 10px 13px -7px ${(props) => props.theme.colors.tertiary}, 
                    0px 0px 43px 19px ${(props) => props.theme.colors.primary};
        font-size: 22px;
    }
`;
