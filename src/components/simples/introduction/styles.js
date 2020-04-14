import styled from 'styled-components';

export default styled.h3`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 500;
    color: #7a798c;
    line-height: 0.75;
    @media only screen and (max-width: 400px) {
        font-size: ${(props) => props.theme.fontSize.small};
    }

`;
