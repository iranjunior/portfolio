import styled, { keyframes } from 'styled-components';
import { MdSend } from 'react-icons/md';

const animation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
`;
export const Summary = styled.h3`
    font-size: 30px;
    font-weight: 500;
    color: #7a798c;
    line-height: 0.75;

`;
export const Title = styled.h1`
    font-size: 92px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 0.75;
    margin-top: 0px;
`;
export const MessageZone = styled.form`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
    "name name email email"    
    "message message message message" 
    "blank blank blank submit"
    ;   
    grid-template-rows: 12% 70% 12%;
    grid-template-columns: 20% 20% 30% 10%;
    justify-content: center;
    grid-gap: 10px;
`;
export const Name = styled.input`
    grid-area: name;
    padding: 20px 10px;
    font-size: ${(props) => props.theme.fontSize.small};
`;
export const Email = styled.input`
    grid-area: email;
    padding: 20px 10px;
    font-size: ${(props) => props.theme.fontSize.small};
`;
export const Message = styled.textarea`
    grid-area: message;
    padding: 20px 10px;
    font-size: ${(props) => props.theme.fontSize.small};
`;
export const Blank = styled.div`
    grid-area: blank;
`;
export const Send = styled.button`
    grid-area: submit;
    display: flex;
    justify-content: center;    
    background-color: ${(props) => props.theme.colors.secondary};
    border: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 700;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: ${(props) => props.theme.colors.tertiary};
    }
}
`;
export const IconSend = styled(MdSend)`
    margin-left: 20px;
    display: ${(props) => (props.loadding ? 'none' : 'block')};
`;
export const Loadding = styled.div` 
    display: ${(props) => (props.loadding ? 'inline-block' : 'none')};
    width: 10px;
    height: 35px;
    
    :after {
    content: " ";
    display: block;
    width: 4px;
    height: 4px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;
