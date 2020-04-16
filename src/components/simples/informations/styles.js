import styled, { css } from 'styled-components';

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
