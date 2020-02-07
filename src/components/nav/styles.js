import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
    height: 70px;
    padding-top: 40px;
    background: ${(props) => props.theme.colors.primary};
    transition: all 200ms ease;
`;
export const WrapperMenu = styled.div`
    display: flex;
`;
export const WrapperButton = styled.div`
    display: flex;
    
    :hover{
    cursor: pointer;
    }

`;

export const Title = styled.div`

    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    margin-right: 48px;
    margin-top: -5px;
    transition: all 200ms ease;
    display: flex;
    align-items: center;
`;
export const Menu = styled.ul`
    background: #9f9fb0;
    list-style: none;
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;

`;

export const Item = styled.li`
    display: flex;
    margin: 0  0  0 1px;
    background-color: ${(props) => props.theme.colors.secondary};
    height: 100%;
    width: 100%;
    padding: 0 30px;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease;
    font-size: ${(props) => props.theme.fontSize.small};
    
    ${(props) => props.active && css`
        background-color: ${props.theme.colors.tertiary};
    `}
    
    :hover{
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
    }
`;
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
