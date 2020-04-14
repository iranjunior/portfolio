import styled from 'styled-components';

export const Menu = styled.div`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    transition: all 200ms ease;
    display: flex;
    align-items: center;
    transform: translateY(${(props) => (props.active === 'hidden' ? '-2.5em' : '8em')});

    @media screen and (max-width: 1250px) {
        transform: translateY(${(props) => (props.active === 'hidden' ? '-2.5em' : '8.5em')});
    }
    @media screen and (max-width: 400px) {
        transform: translateY(${(props) => (props.active === 'hidden' ? '-17px' : '8em')});
    }
`;
export const Dropdown = styled.ul`
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
    height: 20em;
    margin: 0;
    padding: 0;
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
    @media only screen and (max-width: 400px) {
        width: auto;
        font-size: ${(props) => props.theme.fontSize.small};
        height: 50px;
    }
`;
