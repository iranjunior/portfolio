import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
    height: 70px;
    padding-top: 40px;
    background: ${(props) => props.theme.colors.primary};
    transition: all 200ms ease;

    @media only screen and (max-width: 1200px) {
        display: none;
    }
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
