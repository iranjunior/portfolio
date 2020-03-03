import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    justify-content: space-between;
    width: -webkit-fill-available;
    height: 70px;
    padding-top: 40px;
    background: ${(props) => props.theme.colors.primary};
    transition: all 200ms ease;

    @media only screen and (max-width: 1200px) {
        display: flex;
    }
`;
export const WrapperMenu = styled.div`
    display: flex;
    justify-content: space-between; 
    margin: 0 20px;
    width: 100%;
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

    @media only screen and (max-width: 700px) {
        font-size: ${(props) => props.theme.fontSize.medium};
    }
`;
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
