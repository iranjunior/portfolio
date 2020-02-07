import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 25%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
    height: 60%;
    width: 100%;
`;
export const Content = styled.div`
    height: 100%;
    width: 100%;
`;
export const List = styled.ul`
  list-style: none;
  padding-left: 40px

`;
export const Item = styled.li`
  color: #9f9fb0;
  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: 10px;

  :first-child {
    color: ${(props) => props.theme.colors.primary};
    margin: 20px auto;
    display: flex;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 800;;
  }
  :last-child {
    color: #9f9fb0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
  }
`;
export const Information = styled.span`
  color: ${(props) => props.theme.colors.primary};
  ${(props) => props.link && css`
    :hover {
      cursor: pointer;
      text-shadow: 1px 1px 4px #fff;
    }
  `}
`;
export const TitleContent = styled.h2`
`;
