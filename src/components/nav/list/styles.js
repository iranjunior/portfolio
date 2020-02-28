import styled, { css } from 'styled-components';

export const Menu = styled.ul`
    background: #9f9fb0;
    list-style: none;
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 1200px) {
        display: none;
    }
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
