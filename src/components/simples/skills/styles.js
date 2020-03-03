import styled from 'styled-components';

export default styled.div`
    width: 100%;
    margin-right: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    font-weight: 600;
    text-shadow: 0px 0px 1px rgba(16,15,58, 0.4);
    :hover{
        color: ${(props) => props.theme.colors.tertiary};
    }
`;
