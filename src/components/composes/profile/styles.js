import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1250px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 400px;
    }
    @media only screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;
export const Header = styled.div`
  @media only screen and (max-width: 1250px) {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    @media only screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
   
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    @media only screen and (max-width: 1250px) {
        width: 50%;
    }
    @media only screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
