import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
    @media only screen and (max-width: 1250px) {
        width: 90%;
        margin: 1em;
    }
`;
export const WrapperStrength = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 35px;
    flex-wrap: wrap;
`;
