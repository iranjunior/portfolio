import styled from 'styled-components';

export const TextButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-left:40px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.primary};
    :hover{
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    }

`;
export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 40px;
    margin-left: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};

`;
