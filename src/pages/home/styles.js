import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 1250px) {
    height: 100%;
    padding: 2em;
    padding-bottom: 0em;
    }
  @media only screen and (max-width: 700px) {
    margin: 1em;
    }
`;
export const Section = styled.section`
  height: 50em;
  width: 100%;
  background-color: #F5F0F0;
  display: flex;

  @media only screen and (max-width: 1250px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 85%;
    }
`;
