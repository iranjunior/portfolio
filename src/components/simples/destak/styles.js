import styled from 'styled-components';

export default styled.h1`
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 0.75;
    margin-top: 0px;
    @media only screen and (max-width: 700px) {
        font-size: ${(props) => props.theme.fontSize.large};
    }
    @media only screen and (max-width: 400px) {
        font-size: ${(props) => props.theme.fontSize.medium};
    }
`;
