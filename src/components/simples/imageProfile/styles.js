import styled from 'styled-components';

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;
export const WrapperButton = styled.div`
    display: none;
    @media only screen and (max-width: 1250px) {
    display: flex;
    flex-direction: row;
    height: 70px;
    position: relative;
    bottom: 80px;
    margin: 0 auto;
    z-index: 100;
    }
    :hover{
    cursor: pointer;
    }

`;
