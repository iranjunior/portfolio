import styled, { css } from 'styled-components';
import {
  FaInstagram, FaGithub, FaLinkedin, FaMedium,
} from 'react-icons/fa';

export const Container = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
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
  @media only screen and (max-width: 1200px) {
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

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;
export const Content = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    @media only screen and (max-width: 1200px) {
        width: 50%;
    }
    @media only screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
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
export const WrapperButton = styled.div`
    display: none;
    @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    height: 70px;
    position: relative;
    bottom: 80px;
    margin: 0 auto;
    z-index: 100;
    }
    :hover{
    cursor: pointer;
    }

`;

export const TextButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-left:40px;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.primary};
    :hover{
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    }

`;
export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 40px;
    margin-left: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};

`;
export const WrapperIcons = styled.div`
    display: flex;
    justify-content: center;
    color: #ccc
`;
export const Github = styled(FaGithub)`
  cursor: pointer;
  margin-right: 25px;
  margin-top: 20px;
  height: 25px;
  :hover{
    color: #fff;
  }
`;
export const Medium = styled(FaMedium)`
  cursor: pointer;
  margin-right: 25px;
  margin-top: 20px;
  :hover{
    color: #fff;
  }
`;
export const Linkedin = styled(FaLinkedin)`
  cursor: pointer;
  margin-right: 25px;
  margin-top: 20px;
  :hover{
    color: #fff;
  }
`;
export const Instagram = styled(FaInstagram)`
  cursor: pointer;
  margin-right: 25px;
  margin-top: 20px;
  :hover{
    color: #fff;
  }
`;
