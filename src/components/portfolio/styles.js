import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
`;
export const CardZone = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
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
    box-sizing: border-box;
    box-shadow: 5px 5px ${(props) => props.theme.colors.tertiary};

`;
export const Reference = styled.label`
    margin: 10px 0;
`;

export const Links = styled.a`
    font-weight: 300;
    margin-top: 20px;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
export const References = styled.div`
    flex-direction: column;
    display: flex;
    flex-wrap: nowrap;
    margin: 10px 0;
`;

export const TitleCard = styled.h3``;
export const Subtitle = styled.h4`
    margin: 0;
    font-weight: 200;
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
