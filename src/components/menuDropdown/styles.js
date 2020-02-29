import styled from 'styled-components';

export const Menu = styled.div`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    transition: all 200ms ease;
    display: flex;
    align-items: center;
    transform: translateY(${(props) => (props.active === 'hidden' ? '-70px' : '280px')});

`;
export const Dropdown = styled.ul`
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
    height: 600px;
    margin: 0;
`;
export const Item = styled.li`
    display: flex;
    margin: 0  0  0 1px;
    background-color: ${(props) => props.theme.colors.primary};
    height: ${(props) => (props.type === 'blank' ? '100px' : '50px')};
    width: 100%;
    padding: 0 30px;
    color: ${(props) => props.theme.colors.secondary};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 200ms ease;
    font-size: ${(props) => props.theme.fontSize.medium};
    width: 250px;
    
    
    :hover{
    color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
    }
    @media only screen and (max-width: 700px) {
        width: auto;
        font-size: ${(props) => props.theme.fontSize.medium};
    }
`;
