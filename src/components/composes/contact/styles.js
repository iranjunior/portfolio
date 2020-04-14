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
    @media only screen and (max-width: 1250px) {
        width: 90%;
        margin: 1em;
    }
`;
export const MessageZone = styled.form`
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 1250px) {
        grid-template-areas:
        "name name email email"    
        "message message message message" 
        "blank blank blank submit"
        ;   
        grid-template-rows: 12% 70% 12%;
        grid-template-columns: 20% 20% 30% 10em;
        grid-gap: 10px;
    }
    @media only screen and (max-width: 1250px) {
        grid-template-areas:
        "name"
        "email"    
        "message" 
        "submit"
        ;   
        grid-template-rows: 2em 2em 10em 3em;
        grid-template-columns: 80%;
        grid-gap: 2em;
    }
    @media only screen and (max-width: 400px) {
        grid-template-areas:
        "name"
        "email"    
        "message" 
        "submit"
        ;   
        grid-template-rows: 1em 1em 10em 2em;
        grid-template-columns: 100%;
        grid-gap: 2em;
        justify-content: flex-start;
    }   
`;
export const Name = styled.input`
    grid-area: name;
`;
export const Email = styled.input`
    grid-area: email;
`;
export const Message = styled.textarea`
    grid-area: message;
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
