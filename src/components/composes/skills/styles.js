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

export const WrapperSkills = styled.div`
    width: 100%;
    margin-top: 35px;
    column-count: 3;
    @media screen and (max-width: 400px){
        display: flex;
        flex-wrap: wrap;
        
    }
`;
