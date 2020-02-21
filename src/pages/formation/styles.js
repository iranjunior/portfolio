import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    padding: 20px;
    position: absolute;
    }
`;
export const Section = styled.section`
  height: 85%;
  width: -webkit-fill-available;
  background-color: #F5F0F0;
  display: flex;

  @media only screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%
    }
`;
