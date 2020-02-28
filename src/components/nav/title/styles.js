import styled from 'styled-components';

export default styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 800;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 48px;
  margin-top: -5px;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  text-shadow: -1px -1px 0 ${(props) => props.theme.colors.primary},
    1px -1px 0 ${(props) => props.theme.colors.primary},
    -1px 1px 0 ${(props) => props.theme.colors.primary},
    1px 1px 0 ${(props) => props.theme.colors.primary};
  
  :focus{
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
