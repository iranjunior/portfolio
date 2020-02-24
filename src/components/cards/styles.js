import styled from 'styled-components';

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

export const Title = styled.h3``;
export const Subtitle = styled.h4`
margin: 0;
font-weight: 200;
`;
