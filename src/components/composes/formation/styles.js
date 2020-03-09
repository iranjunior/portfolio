import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
`;
export const CardZone = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #F5F0F0;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.tertiary};
    }
`;
