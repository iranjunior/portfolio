import styled from 'styled-components';

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

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};

    margin-top: 20px;
`;
export const Summary = styled.h3`
    font-size: 30px;
    font-weight: 500;
    color: #7a798c;
    line-height: 0.75;

`;
export const Name = styled.h1`
    font-size: 92px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 0.75;
    margin-top: 0px;
    margin-bottom: 20px;
`;
export const Description = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.85714;
    font-weight: 500;
    color: #838293;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
    column-count: 2;
`;

export const WrapperSkills = styled.div`
    width: 100%;
    margin-top: 35px;
    column-count: 3;
    @media screen and (max-width: 400px){
        display: flex;
        flex-wrap: wrap;
        
    }
`;
export const Skills = styled.div`
    width: 100%;
    margin-right: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    font-weight: 600;
    text-shadow: 0px 0px 1px rgba(16,15,58, 0.4);
    :hover{
        color: ${(props) => props.theme.colors.tertiary};
    }
`;
export const FutureSkillsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;

`;
export const FutureSkills = styled.li`
    line-height: 2;
    color:  #838293;
    list-style: none;
    cursor: default;
`;
